import React from 'react'
import errimage from './errimage.png'



const Error = (props) => {
    return (
    <div>
        <h3>There aren't the droids you're looking for</h3>
        <img src={errimage} style={{width:'500px', height:'300px'}}></img>
    </div>
    )
}

export default Error