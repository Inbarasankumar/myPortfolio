import React from 'react';

import HackerImg from '../../assets/img/work/hackerConnect.jpg';
import Ecommerce from '../../assets/img/work/ecommerce.png';
import AutumnCard from '../../assets/img/work/autumnCard.svg';
import Unsplash from '../../assets/img/work/unsplash.jpg';
import Color from '../../assets/img/work/color.png';
import Todo from '../../assets/img/work/todo.png';
import './workpageComponent.scss';

class Work extends React.Component{

//color game https://inbarasankumar.github.io/ColorGame_VanillaJS/
    constructor(props){
        super(props);
        this.projects = [{
            name :'HacKer Connect',
            siteUrl:'https://still-lake-16937.herokuapp.com/',
            gitUrl:'https://github.com/Inbarasankumar/HackerConnect',
            imgUrl:HackerImg,
            Descriptiom:'ReactJs/NodeJS'
        },
        {
            name :'Shop from Anywhere',
            siteUrl:'https://still-lake-16937.herokuapp.com/',
            gitUrl:'https://github.com/Inbarasankumar/ecommerce',
            imgUrl:Ecommerce,
            Descriptiom:'ReactJS/GraphQL'
        },
        {
            name :'Autumn Card',
            siteUrl:'https://inbarasankumar.github.io/AutumnCard/',
            gitUrl:'https://github.com/Inbarasankumar/AutumnCard/',
            imgUrl:AutumnCard,
            Descriptiom:'Vanilla JS/GSAP'
        },
        {
            name :'Unsplash Images',
            siteUrl:'https://inbarasankumar.github.io/ImageSearch_React/',
            gitUrl:'https://github.com/Inbarasankumar/ImageSearch_React',
            imgUrl:Unsplash,
            Descriptiom:'ReactJS/SCSS'
        },
        {
            name :'Guess it?',
            siteUrl:'https://inbarasankumar.github.io/ColorGame_VanillaJS/',
            gitUrl:'https://github.com/Inbarasankumar/ColorGame_VanillaJS/',
            imgUrl:Color,
            Descriptiom:'Vanilla JS/CSS'
        },
        {
            name :'Do it',
            siteUrl:'https://inbarasankumar.github.io/ToDoApp_VanillaJs/',
            gitUrl:'https://github.com/Inbarasankumar/ToDoApp_VanillaJs',
            imgUrl:Todo,
            Descriptiom:'Vanilla JS/CSS'
        }]
    }
    
    render()
    {
        let items = [];
        this.projects.forEach((item,key)=>{
            items.push(
                <div key={key} className="item">
                <div className="item-image">
                    <img src={item.imgUrl} alt={item.name}/>
                </div>
                <div className="item-text">
                    <div className="item-text-wrap">
                        <h2 className="item-text-title">{item.name}</h2>
                        <p className="item-text-category">{item.Descriptiom}</p>
                        <a className='pointer visit-work' target="_blank" rel="noopener noreferrer" href={item.siteUrl}> <i  className='fas fa-external-link-alt'></i></a>
                        <a className='pointer visit-work' target="_blank" rel="noopener noreferrer" href={item.gitUrl} > <i style={{marginLeft:'5px'}} className='fab fa-github'></i></a>
                    </div>
                </div>
            </div>
            )
        })
        return(
            <section id='work-a' className='text-center py-3'>
                <div className="container">
                    <h2 className="section-title">My Work</h2>
                    <div className="bottom-line"></div>
                    <p className="lead">
                        Check out some of my projects
                    </p>
                    <div className="items">
                        {items}
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;