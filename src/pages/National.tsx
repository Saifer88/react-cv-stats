import * as React from "react";
import { faBedPulse, faHeart, faHospital, faHouseMedical, faShieldVirus, faSkullCrossbones, faThermometer, faVirusCovid, faViruses } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card";
import { fetchData } from "../AsyncFunctions";

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

export default class National extends React.Component<HomeProps, HomeState>{

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
          <p>Situazione nazionale, in <span style={{color: 'green'}}>verde</span>/<span style={{color: 'red'}}>rosso</span> le variazioni rispetto ad un giorno fa</p>
          <div className="row"> 
          <Card lenght="4" icona={faVirusCovid} title="Casi" value={this.state.casi}/>
          <Card lenght="4" icona={faSkullCrossbones} title="Deceduti" value={this.state.deceduti}/>
          <Card lenght="4" icona={faHeart} title="Guariti" value={this.state.guariti}/>
          </div>
          <div className="row"> 
            <Card lenght="4" icona={faShieldVirus} title="Immuni*" subtitle="(Over 12 - Dose BOOSTER + Guariti)" value={this.state.vaccinati}/>
          </div>
          <p>(*) Dato riferito a persone sopra i 12 anni con dose booster o guariti negli ultimi mesi</p>
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

