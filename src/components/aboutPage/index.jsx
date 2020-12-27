import React from 'react';

import './aboutPageComponent.scss';
import RaviImg from '../../assets/img/Linkedin/Ravi.jpg';
import EverettImg from '../../assets/img/Linkedin/Everett.jpg';
import SharathImg from '../../assets/img/Linkedin/sharath.jpg';
import AboutImg from '../../assets/img/about.jpg';

class About extends React.Component{

    constructor(props){
        super(props);
        this.skills = [{
            name:"FrontEnd",
            icon:"fa-code",
            content:"HTML,CSS,JavaScript,React,Redux,Redux-Saga,Redux-Thunk,SCSS.Really digging TailwindCSS right now."
        },{
            name:"BackEnd",
            icon:"fa-desktop",
            content:".NET,NodeJs,Express,SQL,Mongo DB,Elastic Search.Pretending to understand GraphQL."
        },{
            name:"Tools Used",
            icon:"fa-tools",
            content:"Webpack,Babel,Jest,Docker,npm,Jenkins,Git,JIRA,CI/CD tools.Loves to make webpages with faster loading time."
        },{
            name:"Others",
            icon:"fa-flag",
            content:"Responsive Design, ES6,TypeScript,C#,GSAP,Progressive Web Application,Website Optimization,Socket.io.Still cannot center an image using CSS."
        }]
    
    }
    render(){
        let skill = [];
        this.skills.forEach((item,index)=>{
            skill.push(
                <div key={index} className='skill-column bg-dark'>
                <i className={`fas ${item.icon}`}></i>
                <h2 className='skill-header'>{item.name}</h2>
                <div className='skill-content'>
                    {item.content}
                </div>
                </div>
            )
        })
        return(
            <React.Fragment>
                <div id='about'>
            <section id='about-a' className='text-center py-2'>
                <div className="container">
                    <h2 className="section-title">About me</h2>
                    <div className="bottom-line"></div>
                    <p className="lead">Who's this guy?</p>
                    <div className="about-info">
                        <img src={AboutImg} alt='Inbarasan' className='bio-image'></img>
                        <div className="bio bg-light">
                            
                            <p className='about-content' style={{paddingBottom:'10px'}}>  "Hello World!!" It is not a greeting. Words which made a turnaround of events in my life. 
    Being an Electrical Engineering graduate and developing software is quite contrasting, isn't it ? While I was thinking, that's when this happened, spark in me ignited the instant I clicked f5, result is "Hello World". Since then I can't get enough. Front-end development calls to my passion.
    </p>
    <p className='about-content'> Goal is to make people's life easier through software. Currently, working as a product developer at Animaker Inc. Our most exciting work is to develop a DIY tool to make slides with more features and graphical characters to the end user. 
    Being in a startups wore a lot of hats. Mentored six interns to develop an internal application for the inhouse QA team.

                </p>
                        </div>
                    </div>

                </div>
            </section>
            <section id='about-b' className='py-3'>
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className='bottom-line'></div>
                    <div className='skill-row'>
                        {skill}
                    </div>
                  </div>

            </section>
            <section id='about-c' className='text-center py-2'>
                <div className='container'>
                        <h2 className="section-title">Loves to Focus on</h2>
                        <div className="bottom-line"></div>
                        <div className="specials">
                           <div>
                               <i className="fas fa-tachometer-alt fa-2x"></i>
                               <h3>Optimization</h3>
                               <p>Fast load times and lag free interaction. Optimize applications using Lighthouse and other tools.</p>
                           </div>
                           <div>
                               <i className="fas fa-redo fa-2x"></i>
                               <h3>Reusability</h3>
                               <p>Focused on writing reusable codes.Can able to visualize anything as Components.</p>
                           </div>
                           <div>
                               <i className="fas fa-laptop-code fa-2x"></i>
                               <h3>Responsive</h3>
                               <p>Interests in make the application to work on any device big or small.</p>
                           </div>
                           <div>
                               <i className="fas fa-rocket fa-2x"></i>
                               <h3>Dynamic</h3>
                               <p>Loves to give life to webpages.Website don't have to be static.</p>
                           </div>
                        </div>
                </div>

            </section>
            <section id="about-d" className="py-4">
                <div className="container">
                    <h2 className='section-title'>Recommendations</h2>
                    <div className="bottom-line"></div>
                    <div className="recommendations">
                        <div>
                            <p>I am a product owner at MemberSuite. Inbarasan was one of the developers my team. He was very efficient and easy to work with. Tickets that he worked on were gauranteed to be completed on time and in accordance to my acceptance criteria. He was a joy to have on my team, so I know he will be great to have on any future team he joins as well.</p>
                            <ul>
                                <li><img src={EverettImg} alt='Everett'></img></li>
                                <li>Everett Rucker , Product Owner</li>
                            </ul>
                        </div>
                        <div>
                            <p>I have worked with Inba right from the first day of his career. He had joined as a fresher to the team I was leading.
                    He has acquired a perfect blend of skillful knowledge and out-of-the-box thinking capability with his growing experience. He brings lots of fresh ideology to the table and perceives each requirement in various aspect.

                    He was very quick in gaining control over a most critical project to begin with and elevated from a nervous intern to a confident developer within couple of months through his extensive dedication. He believes in continuous learning to nurture a skill based experience. I have always seen him energetic, confident and open-minded to constructive feed backs while giving his best to ensure he makes ample justification to his role as a team player.

                    He has excelled as an individual contributor and I am sure his experience inclines him toward an excellent leader.
                    All the very best for all your future endeavors Inba.</p>
                            <ul>
                                <li><img src={SharathImg} alt='Sharath'></img></li>
                                <li>Sharath Pai ,Solutions Architect</li>
                            </ul>
                        </div>
                        <div>
                            <p>I had worked with Inbarasan for over a year. He is always motivated, resourceful and very dedicated. I had overseen his project for over 6 months as a Scrum Master and the technology delivery was flawless. The quality of deliverable has increased significantly over the months. We had seen the happiness in our clients and the end-users of the product and Inba's contribution was significant to it.

                            He takes initiatives and makes sure the tasks are delivered what's promised. He was a very reliable team mate when I had worked in his project. He was given more responsibilities to mentor junior members in the organisation along with his routine work and he did it very well as a coach to them (a team of 6-8 members).

                            Inbarasan is an excellent and a reliable team member and works very well with the team and as an individual contributor and has a great rapport with his team members. I strongly recommend him</p>
                            <ul>
                                <li><img src={RaviImg} alt='Ravi'></img></li>
                                <li>Ravi Wray ,Technical Manager</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            </React.Fragment>
        )
    }
}

export default About;