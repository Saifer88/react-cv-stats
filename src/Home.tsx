import * as React from "react";
import CountUp from "react-countup";
import { fetchData } from "./AsyncFunctions";
import { faBedPulse, faCircle, faHeart, faHospital, faHouseMedical, faShieldVirus, faSkullCrossbones, faThermometer, faVirusCovid, faViruses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    vaccinati: String;
}

const nationalUrl = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json";
const vacciniUrl = "https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/anagrafica-vaccini-summary-latest.json";

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
            varTotalCases: null,
            vaccinati: null
        };
    }

    async componentDidMount() { 
        let nationalData = (await fetchData(nationalUrl))[0];
        let vaccineData = (await fetchData(vacciniUrl));
        let totalImmune:Number = 0;

        vaccineData.data.map((element: any) => {
          if (element.fascia_anagrafica !== "05-11") {
            totalImmune += element.dose_addizionale_booster + element.pregressa_infezione;
          }
        });

        console.log('data', vaccineData);
        
        this.setState({
            'totalCasesToday': nationalData.nuovi_positivi,
            'totalCases': nationalData.totale_positivi,
            'varTotalCases': nationalData.variazione_totale_positivi,
            'intensiveTherapy': nationalData.terapia_intensiva,
            'recovered': nationalData.ricoverati_con_sintomi,
            'home': nationalData.isolamento_domiciliare,
            'deceduti': nationalData.deceduti,
            'guariti': nationalData.dimessi_guariti,
            'casi': nationalData.totale_casi,
            'vaccinati': totalImmune.toString()
        })
    }

    render() {
        return (<div>
          <h1>Dati totali</h1>
          <p>Situazione nazionale, in <span style={{color: 'green'}}>verde</span>/<span style={{color: 'red'}}>rosso</span> le variazioni rispetto a un giorno fa</p>
          <div className="row"> 
          <Card lenght="6" icona={faVirusCovid} title="Casi" value={this.state.casi}/>
          <Card lenght="6" icona={faSkullCrossbones} title="Deceduti" value={this.state.deceduti}/>
          </div>
          <div className="row"> 
            <Card lenght="6" icona={faHeart} title="Guariti" value={this.state.guariti}/>
            <Card lenght="6" icona={faShieldVirus} title="Immuni" subtitle="(Over 12 - Dose BOOSTER + Guariti)" value={this.state.vaccinati}/>
          </div>
        <h1>Dati odierni</h1>
        <div className="row">
            <Card lenght="4" icona={faViruses} title="Nuovi positivi" value={this.state.totalCasesToday}/>
            <Card lenght="4" icona={faThermometer} title="Attualmente positivi" value={this.state.totalCases} diff={this.state.varTotalCases}/>
        </div>
        <div className="row">
            <Card lenght="4" icona={faBedPulse} title="Terapia Intensiva" value={this.state.intensiveTherapy}/>
            <Card lenght="4" icona={faHospital} title="Ricoverati con sintomi" value={this.state.recovered}/>
            <Card lenght="4" icona={faHouseMedical} title="Isolamento domiciliare" value={this.state.home}/>
        </div>
    </div>
    )
}

}

interface CardProps {
    lenght?: String;
    title?: String;
    value?: String;
    icona?: any;
    diff?: String;
    subtitle?: String;
}

function Card(props: CardProps) {
    return (
<div className={"mb-4 col-"+props.lenght}>
      <div className="card text-white bg-dark mb-3">
        <div className="header mt-3 center">
          <h4>{props.title} {props.subtitle != null && 
          (<span className="badge rounded-pill bg-info d-inline-block" tabIndex={0} data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content={props.subtitle}>
            i
          </span>)}
          </h4>
          </div>
        <div className="card-body">
          <div className="row">
            <div className="col-3 d-flex align-items-center">
            <h1><FontAwesomeIcon mask={faCircle} size="2x" transform="shrink-6.45" icon={props.icona} /></h1>
            </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
            <h2 className="value">
              <div className="value">
              <CountUp  duration={1.5} separator="." end={props.value}></CountUp>

              </div>
            </h2>
          </div>
          <div className="col-3 d-flex align-items-center">
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