import React from 'react';
import {Link} from 'react-scroll';

import './homePageComponent.scss';

class HomePage extends React.Component{

    componentDidMount(){
        // var hand = document.getElementsByClassName('rpalmMc')[0];
        // var t1 = new TimelineMax({repeat:-1})
        // t1.to(hand,1,{x:10})
        //     .to(hand,1,{x:0})
       
    }
    render(){
        return(
            <React.Fragment>
                
            <div id='home' className='main-content'>
                        <h1>Hello, I'm Inbarasan.</h1>
                        <p className='lead'>I'm a full-stack web developer</p>
                        <Link to='work-a' smooth duration={1000} className='btn-light'>View My Work</Link>
                     {/* <Char></Char> */}

            </div>
            
            {/* <section id='home-a' className='text-center py-2'>
                <div className='container'>
                        <h2 className="section-title">I Specialize in</h2>
                        <div className="bottom-line"></div>
                        <p className="lead">
                        Full stack developer with 5 years in blending art of design
                        with skill of Programming to deliver engaging experience
                        through efficient website development, proactive feature
                        optimization, and relentless debugging.
                        </p>
                        <div className="specials">
                           <div>
                               <i className="fas fa-file-alt fa-2x"></i>
                               <h3>Concepting</h3>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero iusto asperiores deserunt possimus necessitatibus nostrum mollitia ab dolor quam!</p>
                           </div>
                           <div>
                               <i className="fas fa-desktop fa-2x"></i>
                               <h3>UI/UX</h3>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero iusto asperiores deserunt possimus necessitatibus nostrum mollitia ab dolor quam!</p>
                           </div>
                           <div>
                               <i className="fas fa-object-ungroup fa-2x"></i>
                               <h3>Visual Design</h3>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero iusto asperiores deserunt possimus necessitatibus nostrum mollitia ab dolor quam!</p>
                           </div>
                           <div>
                               <i className="fas fa-thumbs-up fa-2x"></i>
                               <h3>Interaction</h3>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero iusto asperiores deserunt possimus necessitatibus nostrum mollitia ab dolor quam!</p>
                           </div>
                        </div>
                </div>

            </section> */}
            </React.Fragment>
        )
    }
}

export default HomePage;