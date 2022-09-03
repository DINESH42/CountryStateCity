import React, { useState, useEffect } from "react";
import CountryJson from "../Data/Country.json";


const Country = (props) => {

    const [countryCode, setCountryCode] = useState('');

    const onHandleChangeValue = (e) => {
        e.preventDefault();
        setCountryCode(e.target.value);
        props.setcntryCode(e.target.value);
        props.setStateCityName('');
        props.setStCode('');
    }

    return (
        <div>
            <select value={countryCode} onChange={onHandleChangeValue} style={{ padding: "0.5rem", fontSize: "1rem" }}>
                <option value="" >Select country</option>
                {CountryJson.Country.map((value, key) => {
                    return (
                        <option value={value.code} key={key.toString()}>{value.name}</option>
                    )
                })}
            </select>
        </div>
    )

}

export default Country;