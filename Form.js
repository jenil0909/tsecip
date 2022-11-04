import React, { Component } from 'react'

export default class Form extends Component {

constructor(props){
super(props);{
  
    this.state={username:''}
  
}}
handleUsername=(event)=>{
this.setState({
  username:event.target.value,
});
}

  render() {
    return (
        <form>
      <div><label>username </label>
        <input type="text" value={this.state.username} onChange={this.handleUsername}></input></div>
      </form>
    )
  }
}
