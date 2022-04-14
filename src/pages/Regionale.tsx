import { faBedPulse, faHeart, faHospital, faHouseMedical, faShieldVirus, faSkullCrossbones, faThermometer, faVirusCovid, faViruses } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";



interface RegionalProps{
    regionalData
}

class Regional extends React.Component<RegionalProps> {

    constructor(props) {
        super(props);

        //console.log(props.regionalData);
        console.log('props',props);
    }

    render() {
        return (<div>
            <h1>Dati totali</h1>
            <p>Situazione nazionale, in <span style={{color: 'green'}}>verde</span>/<span style={{color: 'red'}}>rosso</span> le variazioni rispetto ad un giorno fa</p>
            <div className="row"> 
            <Card lenght="4" icona={faVirusCovid} title="Casi" value={this.props.regionalData.totale_casi}/>
            <Card lenght="4" icona={faSkullCrossbones} title="Deceduti" value={this.props.regionalData.deceduti}/>
            <Card lenght="4" icona={faHeart} title="Guariti" value={this.props.regionalData.dimessi_guariti}/>
            </div>
        <h1>Dati odierni</h1>
          <div className="row">
              <Card lenght="4" icona={faViruses} title="Nuovi positivi" value={this.props.regionalData.nuovi_positivi}/>
              <Card lenght="4" icona={faThermometer} title="Attualmente positivi" value={this.props.regionalData.totale_positivi} diff={this.props.regionalData.varTotalCases}/>
          </div>
          <div className="row">
              <Card lenght="4" icona={faBedPulse} title="Terapia Intensiva" value={this.props.regionalData.terapia_intensiva}/>
              <Card lenght="4" icona={faHospital} title="Ricoverati con sintomi" value={this.props.regionalData.ricoverati_con_sintomi}/>
              <Card lenght="4" icona={faHouseMedical} title="Isolamento domiciliare" value={this.props.regionalData.isolamento_domiciliare}/>
          </div>
      </div>)
    }
}

export default function Regionale(props) {
    let id = useParams().id;
    return <Regional regionalData={props.regionalData[id]}></Regional>
}