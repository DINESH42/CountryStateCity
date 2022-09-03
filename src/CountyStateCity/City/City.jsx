import React, { useState, useEffect } from "react";
import CityJson from "../Data/City.json";


const City = (props) => {
    const { stCode, setStateCityName } = props;

    const [CityCode, setCityCode] = useState('');
    const [cityName, setcityName] = useState('');

    const onHandleChangeValue = (e) => {
        e.preventDefault();
        setCityCode(e.target.value);
        setStateCityName(e.target.value)
    }
    console.log("CityJson :", stCode, CityJson.CityName[stCode])

    return (
        <div>
            <select value={CityCode} onChange={onHandleChangeValue} style={{ padding: "0.5rem", fontSize: "1rem" }}>
                <option value="" >Select city</option>
                {stCode != '' && CityJson.CityName[stCode].map((value, key) => {
                    return (
                        <option value={value.name} key={key.toString()}>{value.name}</option>
                    )
                })}
            </select>
        </div>
    )

}

export default City;