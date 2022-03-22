import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import Error from './Error'

const Display = (props) => {

    //state that can hold data from axiosPeople call
    const [people, setPeople] = useState({})
    //  Form.jsx- useHistory(`/${category}/${id}`) --> App.js (/:name/:number)
    // --> useParam 
    const {name, number} = useParams();
    // state that can hold data from the AxiosHome call
    const [homeworld, setHomeworld] = useState("")
    // to store and direct to the route that I push
    const history = useHistory();

    // const [films, setFilms] = useState("")

    // request people data from the API
    const axiosPeople = () => {
        // use backtick and ${} to put the params in the api url 
        axios.get(`https://swapi.dev/api/${name}/${number}`)  
        .then(res => {            
            console.log(res.data)
            setPeople(res.data)  // put people data we get from API into the {People}state
        }) 
        // when error happens it will push the error route  to useHistory 
        //and it will direct me to the error page.       
        .catch(err => {
            history.push('/error', err)  
        })
    }

    // render data when Display page shows and whenever the name and number changes
    useEffect(()=>{
        axiosPeople();
    }, [name, number])

    // request homeworld data from the API
    // since we already got people data from axiosPeople, 
    //just ask to get homeworld info from homeworld url inside of the people data. 
    const axiosHome =() => {
        axios.get(people.homeworld)
        
        .then((res) => {
            console.log(res.data.name)
            // get name from the homeworld data and store it into the homeworld state.
            setHomeworld(res.data.name)
        })
    }
    // render howmworld data we get from axiosHome when Display page renders.
    useEffect(() => {
        axiosHome();
    })

    //trying to figure out how to get the data from array of multiple urls
    // const axiosFilm =() => {
    //     axios.get(people.films)
        
    //     .then((res) => {
    //         console.log(res.data.title)
            
    //         setFilms(res.data.title)
    //     })
    // }

    // useEffect(() => {
    //     axiosFilm();
    // })

    return (
    <div>
        <h1> Display {name} </h1>
        <h3>{people.name}</h3>
        {/* use ternary operator to make condition to render different html
        for people and planets */}
        
        {
            
            name == "people"?
            <div>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Eye color: {people.eye_color}</p>
                <p>Home World: {homeworld}</p>
            </div>
                        
            : 
            <div>
                <p>Climate: {people.climate}</p>
                <p>Population: {people.population}</p>
                <p>Surface Water: {people.surface_water}</p>
                {/* <p>Films: {films}</p>
                {JSON.stringify(films)} */}
            </div>
            
        }

    </div>

    )
}

export default Display