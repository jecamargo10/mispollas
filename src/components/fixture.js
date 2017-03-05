import React, {Component} from 'react';

class Fixture extends Component {

  render(){
    return (
      <div>
      <li key={this.props.homeTeamName}>

        {this.props.homeTeamName}
        {this.props.awayTeamName}
        {this.props.date}
        {this.props.matchday}
        {this.props.status}

</li>

      </div>
    );
  }
}

export default Fixture;
