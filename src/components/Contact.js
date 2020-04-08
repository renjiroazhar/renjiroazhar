import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade>Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                    Let’s make it<br></br>
                    <span className='amazing-color'>happen together</span>
                </h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}>
                            <a target='_blank' rel="noopener noreferrer" href={link.url}>
                                <img src={link.image} alt={link.name} style={{margin: '1em 0 2em 0'}}></img>
                            </a>
                        </li>
                    ))}   
                </ul>
        </div>
        </Fade>
        </div>);
    }
}
 
export default Contact;