import React, { Component } from 'react';
import logo from './logo.svg';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';

import firebase from 'firebase';
var download = [];
var hora = [];
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
      download: [],
      upload:'',
      hora: [],
      data: '',
      


    };
  }

  componentWillMount() {
    var database = firebase.database().ref('good').limitToLast(10);
    database.on('child_added', (snapshot) => {
      var i =0;
      //var download  = [] ;
      download [i] = snapshot.val().Download;
      download[i] = parseFloat(download[i]);
      var upload = snapshot.val().Upload;
      hora [i] = snapshot.val().Hora;
      hora [i] = parseInt(hora[i]);
      var data = snapshot.val().Data;
      console.log(download[i]);
      console.log(hora[i]);
     
      this.setState (
        prevState => ({download: [...prevState.download, download[i]] }));
      this.setState(
        prevState => ({ hora:[...prevState.hora, hora[i]] }));
        i++;
        })
  
      
     
  }
 
  

  render() {
    const data = [
      {
        color: "steelblue",
        points: [{ x: this.state.hora[0], y: this.state.download[0] }, { x: this.state.hora[1], y: this.state.download[1] }, { x: this.state.hora[2], y: this.state.download[2] }, { x: this.state.hora[3], y: this.state.download[3] }, { x: this.state.hora[4], y: this.state.download[4] }, { x: this.state.hora[5], y: this.state.download[5] }, { x: this.state.hora[6], y: this.state.download[6] }, { x: this.state.hora[7], y: this.state.download[7] }, { x: this.state.hora[8], y: this.state.download[8] }, { x: this.state.hora[9], y: this.state.download[9] }]
      }
    ];
    return (
      <div>
        <div className="App">
          <h1>Good</h1>
          <LineChart
            width={600}
            height={400}
            data={data}
          />
        </div>
      </div>
    );
  }
}

export default App;
