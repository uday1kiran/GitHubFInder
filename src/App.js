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
  console.log(text)
 /* const res = await axios.get(
    `https://api.github.com/search/users?q=${text}?client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${
      process.env.REACT_APP_GITHUB_CLIENT_SECRET
    }`
    );*/
    const res = await axios.get(
    `https://api.github.com/search/users?q=${text}`
    );
  this.setState({users: res.data.items,loading:false});
  
}
//clear users from state
clearUsers = ()=>this.setState({users:[],loading:false});

  render(){
    const {users,loading}=this.state;
    return(
      <div className="App">
        <Navbar/>
        <div className='container'>
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length>0?true:false}/>
        <Users loading={loading} users={users}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
