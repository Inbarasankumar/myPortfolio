import React from 'react';
import {Link} from 'react-scroll';
import * as Scroll from "react-scroll";

import './menuItemComponent.scss';

class MenuItem extends React.Component{

    state = {navBar:false};

    onScroll=(e)=>{
        
        if(window.scrollY>900){
            this.setState({navBar:true})
        }
        else{
            this.setState({navBar:false})
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
        Scroll.scrollSpy.update();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll)
    }
    render()
    {
        const {navBar} = this.state;
        const navClass = navBar ? 'nav-border':null;
        return(
            // <header id ='nav-home'>
                // <div className='container'>    
                    <nav id='main-nav' className={navClass}>
                        <ul>
                            <li><Link className='nav-item' spy={true} offset={-90} activeClass='current' to='home'>Home</Link></li>
                            <li><Link className='nav-item' spy={true} offset={-50} activeClass='current'  to='about' smooth duration={1000}>About</Link></li>
                            <li><Link className='nav-item' spy={true} offset={-50} activeClass='current'  to='work-a' smooth duration={1000}>Work</Link></li>
                            <li><Link className='nav-item'  spy={true} offset={-50} activeClass='current' to='contact-a' smooth duration={1000}>Contact</Link></li>
                        </ul>
                    </nav>                   
            //     </div>
            // </header>
        )
    }
}
 

export default MenuItem;
