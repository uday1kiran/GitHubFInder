//App.js
import React,{Component} from 'react';
import logo from './logo.svg';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  state={
    users:[],
    loading:false
  }



//Search github users
//query gathered from developer.github.com/v3/search
searchUsers = async text =>{
  this.setState({loading: true});
  const res = await axios.get(
    `https://api.github.com/search/users?q=${text}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
  this.setState({users: res.data.items,loading:false});
  
}
  render(){
    return(
      <div className="App">
        <Navbar/>
        <div className='container'>
        <Search searchUsers={this.searchUsers} />
        <Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
