import React from 'react';

import './footerComponent.scss';

class Footer extends React.Component{
    state = {
        socialMedia:[{
            name:'Linkedin',
            url:'https://www.linkedin.com/in/inbarasan-kumar/',
            icon:'fa-linkedin',
            key:1
        },
    {
        name:'Github',
        url:'https://github.com/inbarasankumar/',
        icon:'fa-github',
        key:2
    },
    {
        name:'Twitter',
        url:'https://twitter.com/KumarInbarasan',
        icon:'fa-twitter',
        key:3
    },
    {
    name:'Medium',
    url:'https://medium.com/@inbarasanraja',
    icon:'fa-medium',
    key:4
    }]
    }

    render(){
        const {socialMedia} = this.state;

        let icons = [];
        socialMedia.forEach((val,key)=>{   
            icons.push(
              <a href={val.url} key={key} target="_blank" rel="noopener noreferrer"> <i key={key} className={`fab ${val.icon}`}></i></a>
            )
        })
        let year = new Date().getFullYear();

        return(
            <footer id='main-footer'>
                <div className='footer-content container'>
                    <p>Inbarasan Kumar &copy; {year}.</p>
                    <div className='social'>
                            {icons}
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;