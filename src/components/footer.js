import React, {Component}  from 'react';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Footer extends Component {
    render () {
        return (
            <div className='footer' >
                <FontAwesomeIcon icon={faGithub}
                onClick={() => window.open('https://github.com/DevNicholaas/Capstone-nm-shop-devcamp')}/>

                
            </div>
        )
    }
}



export default Footer;