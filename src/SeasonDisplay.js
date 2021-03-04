import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text:"Let's go the beach.",
        icon:'sun',
    },
    winter:{
        text:"Let's sleep.",
        icon:'snowflake'
    }
}

const getSeason = (lat,month)=>{
    if(month>2 && month<5){
        return lat>0 ? 'summer' : 'winter'
    }else{
        return lat>0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,icon} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
        <i className={`${icon} icon massive icon-left`}/>
        <br></br>
        <h1>{text}</h1>
        <br></br>
        <i className={`${icon} icon massive icon-right`}></i>
    </div>
    )
}

export default SeasonDisplay;