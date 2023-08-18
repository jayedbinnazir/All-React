import React from 'react';

const Services = (props) => {
    console.log(props)
    let {Route , number} = props;
    return (
        <div>
            <h1>This is Services Page - {number} </h1>
        </div>
    );
};

export default Services;