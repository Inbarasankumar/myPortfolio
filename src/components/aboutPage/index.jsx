import React from 'react';

import './aboutPageComponent.scss';
import AboutImg from '../../assets/img/about.jpg';

class About extends React.Component{

    render(){
     
        return(
            <React.Fragment>
            <section id='about-a' className='text-center py-3'>
                <div className="container">
                    <h2 className="section-title">About me</h2>
                    <div className="bottom-line"></div>
                    <p className="lead">Let me tell you a little about myself and What I do...</p>
                    <div className="about-info">
                        <img src={AboutImg} alt='Inbarasa' className='bio-image'></img>
                        <div className="bio bg-light">
                            <h4>Your Project is in sfae hands</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit enim cupiditate explicabo expedita necessitatibus soluta pariatur nisi adipisci autem iure!</p>
                        </div>
                    </div>

                </div>
            </section>
            <section id='about-b' className='bg-dark py-3'>
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className='bottom-line'></div>
                    <h4>Photography:</h4>
                    <div className="progress"> 
                    <div style={{width:'100%'}}></div>
                    </div>
                    <h4>Photography:</h4>
                    <div className="progress"> 
                    <div style={{width:'90%'}}></div>
                    </div>
                    <h4>Photography:</h4>
                    <div className="progress"> 
                    <div style={{width:'80%'}}></div>
                    </div>
                    <h4>Photography:</h4>
                    <div className="progress"> 
                    <div style={{width:'70%'}}></div>
                    </div>
                    <h4>Photography:</h4>
                    <div className="progress"> 
                    <div style={{width:'90%'}}></div>
                    </div>
                    <h4>Photography:</h4>
                    <div className="progress"> 
                    <div style={{width:'80%'}}></div>
                    </div>
                </div>

            </section>
            <section id="about-d" className="py-4">
                <div className="container">
                    <h2 className='section-title'>Recommendations</h2>
                    <div className="bottom-line"></div>
                    <div className="recommendations">
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nihil velit, hic necessitatibus architecto error assumenda accusantium commodi dolorem voluptatibus rem quisquam ipsam cum labore atque quibusdam harum molestiae!</p>
                            <ul>
                                <li><img src={AboutImg} alt=''></img></li>
                                <li>Sam Smith , New york</li>
                            </ul>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nihil velit, hic necessitatibus architecto error assumenda accusantium commodi dolorem voluptatibus rem quisquam ipsam cum labore atque quibusdam harum molestiae!</p>
                            <ul>
                                <li><img src={AboutImg} alt=''></img></li>
                                <li>Sam Smith , New york</li>
                            </ul>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nihil velit, hic necessitatibus architecto error assumenda accusantium commodi dolorem voluptatibus rem quisquam ipsam cum labore atque quibusdam harum molestiae!</p>
                            <ul>
                                <li><img src={AboutImg} alt=''></img></li>
                                <li>Sam Smith , New york</li>
                            </ul>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, autem nihil velit, hic necessitatibus architecto error assumenda accusantium commodi dolorem voluptatibus rem quisquam ipsam cum labore atque quibusdam harum molestiae!</p>
                            <ul>
                                <li><img src={AboutImg} alt=''></img></li>
                                <li>Sam Smith , New york</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}

export default About;