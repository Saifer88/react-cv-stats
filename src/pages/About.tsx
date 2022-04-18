import { faCircle, faCode, faUserGroup, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import arrow from "../assets/arrow.gif";



export default class About extends React.Component {

    render() {
        return (<div><h1>Chi siamo?</h1>
            <div className="row about">
            <div className="col-4 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon mask={faCircle} size="10x" transform="shrink-6.45" icon={faUserGroup} />
        </div>
        <div className="col-8 d-flex align-items-center">
        <p>Chi sono, mi chiamo Mario, e sto perdendo tempo dando una UI ai dati del ministero, in modo tale che diventino fruibili a chiunque.
        <hr></hr>
        Se ti piace quello che facciamo, offrici una birra</p>
        </div>

        <div>
        </div>

        </div>
        <h1>Fonti Github: </h1>
        <div className="row about">
         <div className="col-4 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon mask={faCircle} size="10x" transform="shrink-6.45" icon={faCode}/>
        </div>
        <div className="col-8 align-items-center">
            <p><a href="https://github.com/pcm-dpc/COVID-19">pcm-dpc/COVID-19</a></p>
            <p><a href="https://github.com/italia/covid19-opendata-vaccini">italia/covid19-opendata-vaccini</a></p>
        </div>
        </div>
            <img className="support-arrow" width="230" height="230" src={arrow}></img>
        </div>)

    }

}