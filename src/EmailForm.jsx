import React,{useState} from 'react'
import emailjs from '@emailjs/browser';
import "./styles.css"
import SendAMessageForm from './components/send-message-section';

const EmailForm = () => {
const [subscribeStatus,setSubscribeStatus] = useState(0); 
const [email,setEmail] = useState('');
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
    emailjs.send('service_esf32jg', 'template_atb0g3v', {email}, "tKQab6k1GCmmOaiHx").then((res) =>{
        console.log(res.text);
        setSubscribeStatus(1);
    }), (err) =>{
        setSubscribeStatus(-1);
        console.log(error.text);
    }
}
const handleSubscribe = (e) =>{
    e.preventDefault();
    sendEmail();
    setEmail('');
}
  return (
      <>
    <section id='subscribe-email' className="subscribe-form wf-section">
        <div className="centered-container-2 w-container">
            <h2 className="heading-4" data-text="t32603ad3">Keep up with us!</h2>
            <p data-text="tn53b8a984">If you would like to be notified with project updates please drop your email below</p>
        </div>
        <div className="w-form">
            <form   name="email-form" data-name="Email Form" style={{display:"flex",width:"100%", marginBottom:"10px", flexDirection:'row'}} className="subscribe-form-flex" aria-label="Email Form">
                <div className="subscribe-form-input-wrapper" style = {{ justifyContent:"center",}} >
                    {/* <label for="subscriber-email" id="subscribe-email">Email</label> */}
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="subscribe-form-input w-input" maxLength="256" name="contact[email]" value={email} data-name="Subscriber Email" placeholder="Email" required=""/>
                    </div><input onClick={(e) => handleSubscribe(e)} type="submit" value="Subscribe" data-wait="Please wait..." style={{width:"7%"}} className="w-button lasdmanasd"/>
                    <div style={{position:"relative", overflow:"hidden"}} aria-hidden="true">
                        <div style={{position:"absolute",left:"40000px"}}>
                        <input type="checkbox" name="contact_me_by_fax_only" value="1" tabIndex="-1" autoComplete="nope" autofill="off"/>
                    </div>
                    </div>
                    </form>
                        {buildSubscribeResponse()}
                   
                    </div>
                </section>
            <SendAMessageForm />   
        </>
  )
}

export default EmailForm;