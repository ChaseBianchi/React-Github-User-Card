import axios from 'axios';
import React from 'react'
import './App.css';
import styled from 'styled-components'
import Card from './Card'

const StyledApp = styled.div`
width: 100%;
height: auto;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
// border: 5px solid red;
`

class App extends React.Component {
  state = {github: {}, followers: [], search: ''}
  componentDidMount(){
    axios.get('https://api.github.com/users/chasebianchi')
    .then(res=>this.setState({github: res.data}))
    .catch(err=>console.log(err));

    axios.get('https://api.github.com/users/chasebianchi/followers')
    .then(res=>this.setState({followers: res.data}))
    .catch(err=>console.log(err))
  }
  formChange = (e)=>{
    this.setState({search: e.target.value})
  }
  formSubmit = (e)=>{
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.search}`)
    .then(res=>this.setState({github: res.data, search: ''}))
    .catch(err=>console.log(err));
  }
  render(){
  return (
    <div>
    <StyledApp>
      <h1>Who is this Git?</h1>
      <form onSubmit={this.formSubmit}>
        <input onChange={this.formChange} placeholder='enter a github username' type='text' name='searchbar' value={this.state.search}/>
        <button>Find Git</button>
      </form>
      <Card github={this.state.github} followers={this.state.followers}/>
    </StyledApp>
    </div>
  );
}
}

export default App;
