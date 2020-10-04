import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    state={
        text:''
    }
    static propTypes={
        searchUsers: PropTypes.func.isRequired,//ptfr shortcut
    }
    //if we don't use arrow function then we need to bind this/event object to the function explicitly
    onSubmit(e){
        e.preventDefault();
        //a way to send props back to App.js
        this.props.searchUsers(this.state.text);
    }

    onChange = (e) =>{
        this.setState({text: e.target.value});
        //or we can type//this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Users..." 
                    value={this.state.text}
                    onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
