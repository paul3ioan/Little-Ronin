import React,{useState} from 'react'
import emailjs from '@emailjs/browser';

const SendAMessageForm = () => {
    const [subscribeStatus,setSubscribeStatus] = useState(0); 
const [email,setEmail] = useState('');
const [firstName,setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [phoneNumber,setPhoneNumber]= useState('');
const [message, setMessage] = useState('');
const buildSubscribeResponse = () =>{
    if(subscribeStatus == 0) return null;
    if(subscribeStatus == -1) return ( <div style={{display:"block"}} className="w-form-fail" tabIndex="-1" role="region" aria-label="Email Form failure">
    <div  data-text="tn7c112e99">Oops! Something went wrong while submitting the form.</div>
    </div>);
    
    return (<div style={{display:"block"}} className="w-form-done" tabIndex="-1" role="region" aria-label="Email Form success">
    <div data-text="t5a0ea5a1">Thank you! Your submission has been received!</div>
</div>);
}
const sendEmail = () =>{
    emailjs.send('service_esf32jg', 'template_mi1bri1', {email, message, phoneNumber, lastName, firstName}, "tKQab6k1GCmmOaiHx").then((res) =>{
        console.log(res.text);
        setSubscribeStatus(1);
    }), (err) =>{
        setSubscribeStatus(-1);
        console.log(error.text);
    }
}
const handleClick = (e) =>{
    e.preventDefault();
    sendEmail();
    setEmail('');
    setFirstName('');
    setLastName('');
    setMessage('');
    setPhoneNumber('');
}
  return (
    <section id="contact-form" className="contact-form wf-section">
        <div className="w-container">
            <h2 className="heading-5" data-text="t5278c0e4">Contact form</h2>
            <p data-text="t177db205">If you need to drop us a line and you don't want to use twitter we are here!</p>
            <div id="formInstructions" className="small-text" data-textarea="tan2c493e9e">
                <em>Fields marked with an asterisk (*) are required.</em>
            </div>
            <div className="w-form">
                <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Wf Form Contact Form" data-ajax-action="contact" aria-label="Wf Form Contact Form">
                    <div className="contact-form-grid">
                        <div id="w-node-e65bbf30-7cc6-d0fc-e6de-18ad7b0cb291-e7678e7e">
                            <input className="w-input" maxLength="256" name="contact[first-name]" data-name="First Name" placeholder="First Name:" id="First-Name*:" onChange={(e) => setFirstName(e.target.value)} value = {firstName} required="" style={{backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbhJREFUWAntVr1OhEAQZsECSKBQC/9aba+z9iU08SWuvPcwNrY2V+hL+AoabbRE6bSAxEAM4DfkuFuWXU5y/MSETTbMznzzs7Mzy2raOMYMIAOWZR3puj5njPmYWcfTJ1/kk5LPQBxGUfQEepsYPY5P0zQnRpqmN3B62qPjwpWdJMkess0+wDkouD1/fU1x3p5hGJe2be/TJBo4T4ZtGrBoQxaA57pupR6IJwti0wC2RAOo0FkQBF8in3jIxAw1M+dl4J3z63U09MsQMSWU8jJitSKZiN90ra/MD0NVAojj+EwVSp1MpbOOjwyyTAC9O44zEeuAijAMw0dg8xus0IH+fUH/5ZtlWblmFGfoUev10YaVI1js4hnfb0y2mEQTr/VROQIwpmiVa5kntOgUKbziZa0eARzc8sZlNGHgtLU/Jn8Tpii+XZlTnkcYBJC2GMSyC96Q3hPemYqG81fIjlXyJnz+Kn5poEjYPAAcyUUDPQ31dcfjlwFgVz/IAC9T0jwW//RG9wB0S3ZVbVgCdblAQMM+SHQE8NDlDutsk+/iUUp3/E4duANZ/ijN7Q75LO9gY6PJf5aBX7tnEYIBb5bnAAAAAElFTkSuQmCC&quot;)", backgroundRepeat: "no-repeat",  backgroundSize: "16px 18px", backgroundPosition: "98% 50%", cursor: "auto"}}/>
                            </div>
                            <div id="w-node-e65bbf30-7cc6-d0fc-e6de-18ad7b0cb295-e7678e7e">
                            <input className="w-input" maxLength="256" name="contact[last-name]" data-name="Last Name" placeholder="Last Name*:" onChange={(e) => setLastName(e.target.value)} id="Last-Name" required="" value = {lastName}/>
                            </div>
                            <div id="w-node-e65bbf30-7cc6-d0fc-e6de-18ad7b0cb299-e7678e7e">
                                <input type="email" className="w-input" maxLength="256" name="contact[email]" value={email} data-name="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email*:" id="Email" required=""/>
                            </div>
                            <div id="w-node-e65bbf30-7cc6-d0fc-e6de-18ad7b0cb29d-e7678e7e">
                                <input type="tel" className="w-input" maxLength="256" name="contact[contact-phone-number]" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} data-name="Contact Phone Number" placeholder="Phone number" id="Contact-Phone-Number"/>
                                </div>
                                <div id="w-node-e65bbf30-7cc6-d0fc-e6de-18ad7b0cb2a1-e7678e7e">
                                    <textarea data-name="Message" maxLength="5000" id="Message" name="contact[message]" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message" className="w-input"></textarea>
                                    </div>
                                    </div>
                                    <input type="submit" onClick={(e) => handleClick(e)} value="Submit" data-wait="Please wait..." className="w-button"/>
                            </form>
                            {buildSubscribeResponse()}
                        </div>
                    </div>
                </section>
  )
}
export default SendAMessageForm;