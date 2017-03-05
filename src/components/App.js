import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';
import { DateRange } from 'react-date-range';
import Games from './games';
import axios from 'axios';
import Fixture from './fixture';

var moment = require('moment');
var datestart = new moment('2014-11-11');
var dateend = new moment('2014-11-11');

const ROOT_URL = "https://mispollas.herokuapp.com/games?";

class App extends Component {

  constructor(props) {
    super(props);
 this.onChange = this.onChange.bind(this);
    this.state = {
      fixtures:[],
      homeTeamName: '',
      awayTeamName: 'mierda',
      date: '',
      matchday  :   '',
      status: ''};
}


onChange(state) {
    this.setState(state);
  }
     getGames() {
var diasdiferencia =dateend.diff(datestart, 'days');
console.log(dateend.diff(datestart, 'days'));
if(diasdiferencia> 20)
{
  alert("El maximo rango de fechas permitido es de 21 dias");
}
else {
  console.log("Query time");
  axios.get(ROOT_URL+ "day=05&month=03&year=2017&day2=20&month2=03&year2=2017")
       .then(response => {
         console.log("Busco");
         console.log(JSON.parse(response.data));
      //   console.log(response.data);
this.setState({ fixtures: (response.data) });

           })
           .catch(function (error) {
   console.log(error);
});

//this.props.children.Games.getGames();

}


      }



      handleSelect(date){

                     datestart = new moment(date.startDate);
        dateend = new moment(date.endDate);
  }


  render() {
    return(
      <div>

      <h1>Hello, {this.props.name}!</h1>
      <DateRange
                        onInit={this.handleSelect}
                        onChange={this.handleSelect}
                    />
                    <   button onClick={this.getGames.bind(this)}>Ver Partidos</button>








                    <div>

                    {this.state.fixtures.map(fixture => {
                       return <Fixture fixture={fixture} />
                     })}
      </div>





                    </div>




    )
  }
};




export default App;
