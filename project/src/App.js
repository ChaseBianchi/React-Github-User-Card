import axios from 'axios';
import React from 'react'
import './App.css';
// import axios from 'axios';
import Card from './Card'

class App extends React.Component {
  state = {github: {}, followers: []}
  componentDidMount(){
    axios.get('https://api.github.com/users/chasebianchi')
    .then(res=>this.setState({github: res.data}))
    .catch(err=>console.log(err));

    axios.get('https://api.github.com/users/chasebianchi/followers')
    .then(res=>this.setState({followers: res.data}))
    .catch(err=>console.log(err))
  }
  render(){
  return (
    <div className="App">
      <h1>Who is this Git?</h1>
      <Card github={this.state.github} followers={this.state.followers}/>
    </div>
  );
}
}

export default App;
