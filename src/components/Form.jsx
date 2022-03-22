import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import Display_people from './Display'

const Form = (props) => {
    // make state that can hold the value from select form(people or planets)
    // put 'people' as a default value to prevent it to be empty. it will cause error.
    const [category, setCategory] = useState("people") 

    // make sate that can hold the id number from input form.
    const [id, setId] = useState("")
    
    // to store the route that the form push and direct page to the route.
    const history = useHistory();
    
    // what happens when you submit the form (when you click the serach button)
    const handleSearch = (e) => {
        e.preventDefault();
        // push the category and id number that I put in the form to the useHistory so it takes me to the route.
        history.push(`/${category}/${id}`); // used backtick and ${} to put the value (category and id) into the route.

    }

    return (
        <div>
            {/* when I click the  'search' button, it will call 'handleSearch'function  */}
            <form onSubmit={handleSearch}> 
                <label>Search For:</label>
                {/* what I select from this form will be stored in {category}*/}
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID:</label>
                {/* what I input will be stored in {id} */}
                <input type="text" onChange={(e)=>setId(e.target.value)} value={id}></input>
                <button>Search</button>
            </form>

        </div>
    
    )
}

export default Form