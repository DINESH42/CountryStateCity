import React, { useState, useEffect } from "react";
import StateJson from "../Data/State.json";

const State = (props) => {

    const { cntryCode, setStCode, setStateCityName } = props;
    const [stateName, setstateName] = useState('');
    const [sttCode, setsttCode] = useState('');

    const onHandleChangeValue = (e) => {
        e.preventDefault();
        setStCode(e.target.value);
        setsttCode(e.target.value);
        setStateCityName('');
    }
    console.log("StateJsonStateJson :", cntryCode, StateJson.State[cntryCode])

    return (
        <div>
            <select value={sttCode} onChange={onHandleChangeValue} style={{ padding: "0.5rem", fontSize: "1rem" }}>
                <option value="" >Select state</option>
                {cntryCode != '' && StateJson.State[cntryCode].map((value, key) => {
                    return (
                        <option value={value.code} key={key.toString()}>{value.name}</option>
                    )
                })}
            </select>
        </div>
    )

}

export default State;