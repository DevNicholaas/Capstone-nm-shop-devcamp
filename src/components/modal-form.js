import React, { Component, useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import axios from "axios";

export default class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      title: "",
      price: 0,
      img: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.img);

    axios
      .post("https://nm-shop-db-devcamp.herokuapp.com/shop", {
        img: this.state.img,
        title: this.state.title,
        price: this.state.price,
      })
      .then((response) => {
      this.props.handleSuccessfullFormSubmission(response.data);
      })
      .catch((error) => {
        console.log("error submit", error);
      });
      event.preventDefault();   
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    let { file } = this.state;

    file = e.target.files[0];

    this.convertToBase64(file)
      .then((result) => {
        file = result;
        console.log("File Is", file);
        this.setState({
          img: result,
          file,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      file: e.target.files[0],
    });
  };

  convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="title"
          placeholder="Fruit Title"
          value={this.state.title}
        />
        <input
          onChange={this.handleChange}
          type="float"
          name="price"
          placeholder="Fruit Price"
          value={this.state.price}
        />
        <input
          onChange={this.handleFileInputChange}
          type="file"
          name="img"
          placeholder="Fruit Image file"
          accept=".jpeg, .png, .jpg"
        />

        <button>Save</button>

      </form>
    );
  }
}
