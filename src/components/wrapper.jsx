import React from 'react';

import Contact from '../components/contactPage';
import Work from '../components/workpage';
import About from '../components/aboutPage';
import Footer from '../components/footer';


class Wrapper extends React.Component{

    render(){
        return(
            <React.Fragment>
                <About></About>
                <Work></Work>
                <Contact></Contact>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default Wrapper;