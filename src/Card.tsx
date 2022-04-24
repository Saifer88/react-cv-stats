import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import CountUp from "react-countup";

interface CardProps{
    lenght?: String;
    title?: String;
    value?: String;
    icona?: any;
    diff?: String;
    subtitle?: String;
    dontanimate?: boolean;
}

export default function Card(props: CardProps) {
    return (
<div className={"mb-4 col-xl-"+props.lenght+" col-12"}>
      <div className="card text-white bg-dark mb-3 s">
        <div className="header mt-3 center">
          <h4>{props.title}
          </h4>
          </div>
        <div className="card-body">
          <div className="row d-flex align-items-center">
            <div className="col-3">
            <h1><FontAwesomeIcon mask={faCircle} size="2x" transform="shrink-6.45" icon={props.icona} /></h1>
            </div>
          <div className="col-6 d-flex justify-content-center">
            <h2 className="value">
              <div className="value">
              {!props.dontanimate && (<CountUp  duration={1.5} separator="." end={props.value}></CountUp>)}
              {props.dontanimate && (<div>{props.value}</div>)}
              </div>
            </h2>
          </div>
          <div className="col-3">
          <h5 className={+props.diff > 0 ? 'red' : 'green'}>
            {+props.diff > 0  && '+'}{props.diff && (<CountUp  duration={1.5} separator="." end={props.diff}></CountUp>)}
          </h5>
          </div>
          </div>
        </div>
      </div>
      </div>
    )
}