import React, { useState, useEffect } from "react";
import Country from "./Country/Country"
import State from "./State/State";
import City from "./City/City";


const CountryStateCity = () => {
    const [cntryCode, setcntryCode] = useState('');
    const [stCode, setStCode] = useState('');
    const [stateCityName, setStateCityName] = useState('');

    return (
        <div style={{ backgroundColor: "#adbab8", height: "100vh" }}>

            <div style={{ width: "100%", display: "flex", flexDirection: "row", flex: 1, justifyContent: "space-evenly", padding: "2rem 1rem" }}>
                <Country setcntryCode={setcntryCode} setStateCityName={setStateCityName} setStCode={setStCode}/>
                <State cntryCode={cntryCode} setStCode={setStCode} setStateCityName={setStateCityName} />
                <City stCode={stCode} setStateCityName={setStateCityName} />
            </div>
            <span style={{ width: "100%", display: "flex", flexDirection: "row", padding: "2rem 1rem", justifyContent: "center", textAlign: "center", marginTop: "10rem", border: "1px solid gray" }}>City Name :{" " + stateCityName}</span>
        </div>
    )

}
export default CountryStateCity;