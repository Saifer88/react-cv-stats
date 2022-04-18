import * as React from 'react';
import './App.css';
import { fetchData } from './AsyncFunctions';
import NavbarComponent from './Navbar';
import Page from './Page';



const regionalDataUrl = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';

interface AppComponentState {
    regionalData;
}

export default class App extends React.Component<{},AppComponentState> {


  constructor(props){
    super(props);
    this.state = {
        regionalData: null
    }
}



async componentDidMount(){
    let regionData = (await fetchData(regionalDataUrl));

    this.setState({regionalData: regionData})
 }

  
  render() {
    return (
      <div>
        {this.state.regionalData && (<NavbarComponent regionalData={this.state.regionalData}></NavbarComponent>)}
        <div className="container">
          {this.state.regionalData && (<Page regionalData={this.state.regionalData}></Page>)}
        </div>
      </div>
    );
  }

}

