import React, { useEffect, useState } from "react";
// import './App.css';
import search from './search.png';
import linkedin from './linkedIn.png';
import github from './github.gif'

export default function Weather(){

        const [oldCity, newCity] = useState('');
        const [city,setCity] = useState(null);
        const [search1,setSearch] = useState("Bangalore");

        function updateValue(event){
            newCity(event.target.value);
        }

        function updateFunction(){
            setSearch(oldCity);
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ {search1} +"')";
        }

        useEffect(()=>{
            const fetchApi = async()=>{
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search1}&appid=32240d2409a3399c57d6610a4648bd2f&units=metric`;
                const response = await fetch(url);
                const resJson = await response.json();
                console.log(resJson);
                // console.log(city.weather.description);
                setCity(resJson);
            }
            fetchApi();
        },[search1]);  

        return (
            <div className='container'>
                <div className="search" >
                    <input type="text" className="searchBar" placeholder="Search" onChange = {updateValue}></input>
                        <button onClick={updateFunction}>
                            <img src={search} className="searchButton" alt="search" />
                        </button>
                </div>
                {!city?alert("No data found"):
                <div>
                    <div id='cityName'>Weather in {search1}</div>
                    <div className="temp"> {city.main.temp} <span>&#8451;</span></div>
                    <div className="flex">
                        {/* <img src="https://openweathermap.org/img/wn/" className="icon"></img> */}
                        <span className="description">{city.weather.description}</span>
                    </div>
                    <div className="humidity">Humidity: {city.main.humidity} %</div>
                    <div className="speed">Wind speed: {city.wind.speed} km/h</div>
                    <div className="Links">    
                        <span className="linkedIn">
                            <a href="https://www.linkedin.com/in/nawaz-sharief-07b880244/" target="_blank" rel="noreferrer">
                                <img src={linkedin} className="linkedImage" alt="linkedIn"></img>
                            </a>
                        </span>
                        <span className="github">
                            <a href="https://github.com/nsharie/" target="_blank" rel="noreferrer">
                                <img  className="githubpicture" src={github} alt="github">
                                </img>
                            </a>
                        </span>
                    </div>
                </div>
                }
            </div>
        );
    };