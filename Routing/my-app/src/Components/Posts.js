import React from 'react';

const Posts = (props) => {
    console.log(props);
    let {match}=props ;
    let {params} = match ;
    
    return (
        <div>
           <b>This is The Post Page of {params.catagory} and {params.topic} </b>
        </div>
    );
};

export default Posts;