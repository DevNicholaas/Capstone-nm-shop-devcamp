import React, { Component } from 'react'
import ReactModal from 'react-modal'
import ModalForm from './modal-form'

ReactModal.setAppElement(".app-wrapper");

export default class Modal extends Component {
    constructor(props) {
        super(props)

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%",
                width: "800px",
                height: "60px",
                display: "flex",
                justifyContent: "center"
            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }, 

            form: {
                input: {
                    fontSize: "20px",
                    marginRight: "5px"
                }
            }
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
    }

    handleSuccessfulFormSubmission (item) {
        console.log(item, 'from Modal.js');
        this.props.handleSuccessfulNewFormSubmission(item);
    }

    render() {
        return (
            <ReactModal 
            style={this.customStyles}
            onRequestClose={() => {this.props.handleModalClose();}} 
            isOpen={this.props.modalIsOpen}>
                <ModalForm handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}/>

            </ReactModal>
        )
    }
} 

