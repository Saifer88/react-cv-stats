import * as React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { fetchData } from "./AsyncFunctions";
import Page from "./Page";
import { FaAmazon, FaBacterium, FaBed, FaHouseDamage, FaLungsVirus } from 'react-icons/fa';
import { IconType } from "react-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBedPulse, faCircle, faHeart, faHospital, faHouseMedical, faSkullCrossbones, faThermometer, faVirusCovid, faViruses } from "@fortawesome/free-solid-svg-icons";

interface HomeProps {

}

interface HomeState {
    totalCasesToday: String;
    totalCases: String;
    intensiveTherapy: String;
    recovered: String;
    home: String;
    deceduti: String;
    guariti: String;
    casi: String;
    varTotalCases: String;
}

const nationalUrl = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json";

export default class Home extends React.Component<HomeProps, HomeState>{

    constructor(props: HomeProps) {
        super(props);

        this.state = {
            totalCasesToday: null,
            totalCases: null,
            intensiveTherapy: null,
            recovered: null,
            home: null,
            deceduti: null,
            guariti: null,
            casi:null,
            varTotalCases: null
        };
    }

    getBacteriumIcon(){
        return (<FaBacterium></FaBacterium>);
    }

    async componentDidMount() { 
        let nationalData = (await fetchData(nationalUrl))[0];

        console.log('data', nationalData);
        
        this.setState({
            'totalCasesToday': nationalData.nuovi_positivi,
            'totalCases': nationalData.totale_positivi,
            'varTotalCases': nationalData.variazione_totale_positivi,
            'intensiveTherapy': nationalData.terapia_intensiva,
            'recovered': nationalData.ricoverati_con_sintomi,
            'home': nationalData.isolamento_domiciliare,
            'deceduti': nationalData.deceduti,
            'guariti': nationalData.dimessi_guariti,
            'casi': nationalData.totale_casi
        })
    }

    render() {
        return (<div>
          <div className="row"> 
          <Card lenght="4" icona={faVirusCovid} title="Casi" value={this.state.casi} diff={null}/>
          <Card lenght="4" icona={faSkullCrossbones} title="Deceduti" value={this.state.deceduti} diff={null}/>
            <Card lenght="4" icona={faHeart} title="Guariti" value={this.state.guariti} diff={null}/>
          </div>
        <div className="row">
            <Card lenght="6" icona={faViruses} title="Nuovi positivi" value={this.state.totalCasesToday} diff={null}/>
            <Card lenght="6" icona={faThermometer} title="Totale positivi" value={this.state.totalCases} diff={this.state.varTotalCases}/>
        </div>
        <div className="row">
            <Card lenght="4" icona={faBedPulse} title="Terapia Intensiva" value={this.state.intensiveTherapy} diff={null}/>
            <Card lenght="4" icona={faHospital} title="Ricoverati con sintomi" value={this.state.recovered} diff={null}/>
            <Card lenght="4" icona={faHouseMedical} title="Isolamento domiciliare" value={this.state.home} diff={null}/>
        </div>
    </div>
    )
}

}

interface CardProps {
    lenght: String;
    title: String;
    value: String;
    icona: any;
    diff: String;
}

function Card(props: CardProps) {
    return (
<div className={"mb-4 col-"+props.lenght}>
      <div className="card text-white bg-dark mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
            <h1><FontAwesomeIcon mask={faCircle} size="2x" transform="shrink-10" icon={props.icona} /></h1>
            </div>
          <div className="col-5  d-flex align-items-center">
            <h4 className="center">{props.title}</h4>
          </div>
          <div className="col-2 d-flex align-items-center">
            <h4>
            <CountUp  duration={1.5} separator="." end={props.value}></CountUp>
            </h4>
          </div>
          <div className="col-2 d-flex align-items-center">
          <h4 className={+props.diff > 0 ? 'red' : 'green'}>
            {+props.diff > 0  && '+'}{props.diff && (<CountUp  duration={1.5} separator="." end={props.diff}></CountUp>)}
          </h4>
          </div>

          </div>
        </div>
      </div>
      </div>


    )



}