import React from 'react';

import './toast.scss';
class Toast extends React.Component{

    render(){
        const {message} = this.props;
        return(
            <div id='toast'>{message}</div>
        )
    }
}

export default Toast;