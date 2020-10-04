//App.js
import React,{Component} from 'react';
import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false
  }


//npm i axios
async componentDidMount(){
 this.setState({loading: true});
 //axios.get('https://api.github.com/users').then(res => console.log(res.data));
 const res = await axios
 .get('https://api.github.com/users');

 //console.log(res.data);
 this.setState({users: res.data,loading:false});
 
}

  render(){
    return(
      <div className="App">
        <Navbar/>
        <div className='container'>
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
