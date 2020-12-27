import React from 'react';
import emailjs from 'emailjs-com';

import Toast from '../toast';
import './contactPageComponent.scss';

class Contact extends React.Component{

    state = {showToast:false,message:'',type:''};

    onFormSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_nwf05v5', 'template_skoedps', e.target, 'user_yPb4tXfw9fcKEtkub12bi')
        .then(result => {
            this.setState({showToast:true,message:'Thank You for your message.',type:'success'});
            setTimeout(()=>{this.setState({showToast:false,message:'',type:''});},2000)
            },
        error => {
            this.setState({showToast:true,message:'Sorry,Error occurred',type:'error'});
            setTimeout(()=>{this.setState({showToast:false,message:'',type:''});},2000)
            })
            e.target.name.value =  e.target.email.value = e.target.subject.value = e.target.message.value = e.target.number.value = null;
    }
    
    render(){
        const {showToast,message,type} = this.state;
        return(
           <React.Fragment>
               {showToast && <Toast message={message} type={type} class='show' ></Toast>}
               <section id='contact-a' className='text-center py-3'>
                <div className="container">
                    <h2 className="section-title">Contact Me</h2>
                    <div className="bottom-line"></div>
                    <p className="lead">Have a question / Wanna talk about tech</p>
                    <form onSubmit={(e)=>this.onFormSubmit(e)}>
                        <div className="text-fields">
                            <input type="text" name="name" required className="text-input name-input" placeholder='Name'/>
                            <input type="text" name="subject" required className="text-input subject-input" placeholder='Subject'/>
                            <input type="email" name="email" required className="text-input email-input" placeholder='Email Address'/>
                            <input type="text" name="number" className="text-input phone-input" placeholder='Phone Number'/>
                            <textarea name="message" required className='text-input message-input' placeholder='Message' cols="30" rows="10"></textarea>
                        </div>
                        <button type='submit' className='btn-dark btn-sub'>Submit</button>
                    </form>
                </div>
               </section>
               <section id="contact-b" className="py-3 bg-dark">
                   <div className="container">
                       <div className="contact-info">
                           <div>
                               <i className="fas fa-envelope fa-2x"></i>
                               <h3>Email</h3>
                               <p>inbarasanraja@gmail.com</p>
                           </div>
                           <div>
                               <i className="fas fa-phone fa-2x"></i>
                               <h3>Phone</h3>
                               <p>+91-8807863681</p>
                           </div>
                           <div>
                               <i className="fas fa-address-card fa-2x"></i>
                               <h3>Address</h3>
                               <p>No 225, Welcome Street, Chennai India.</p>
                           </div>
                       </div>
                   </div>
               </section>

               <section id='contact-c' className='bg-main py-4'>
                   <div className="container">
                   <h1>
                       Let's make the web a better place
                   </h1>
                   </div>
                  
               </section>
           </React.Fragment>
        )
    }
}

export default Contact;