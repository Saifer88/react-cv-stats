import * as React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { fetchData } from "./AsyncFunctions";
import Page from "./Page";

interface HomeProps {

}

interface HomeState {
    totalCasesToday: String;
    totalCases: String;
    intensiveTherapy: String;
    recovered: String;
    home: String;
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
        };
    }

    async componentDidMount() { 
        let nationalData = (await fetchData(nationalUrl))[0];
        
        this.setState({
            'totalCasesToday': nationalData.nuovi_positivi,
            'totalCases': nationalData.totale_positivi,
            'intensiveTherapy': nationalData.terapia_intensiva,
            'recovered': nationalData.ricoverati_con_sintomi,
            'home': nationalData.isolamento_domiciliare
        })
    }

    render() {
        return (<div>
        <div className="row">
            <Card lenght="6" title="Nuovi positivi:" value={this.state.totalCasesToday}/>
        </div>
        <div className="row">
            <Card lenght="12" title="Totale positivi:" value={this.state.totalCases}/>
        </div>
        <div className="row">
            <Card lenght="4" title="Terapia Intensiva:" value={this.state.intensiveTherapy}/>
            <Card lenght="4" title="Ricoverati con sintomi:" value={this.state.recovered}/>
            <Card lenght="4" title="Isolamento domiciliare:" value={this.state.home}/>
        </div>
    </div>
    )
}

}

interface CardProps {
    lenght: String,
    title: String,
    value: String
}

function Card(props: CardProps) {
    return (
        <div className={"justify-content-end col-"+props.lenght}>
        <div className="card text-white bg-dark mb-3">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h1 className="card-text right"><b><CountUp duration={1.5} end={props.value}></CountUp></b></h1>
        </div>
        </div>
    </div>
    )
}