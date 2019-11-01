import React, { Component} from 'react';
import './App.css';
import {Button, Card, Image, Icon, Divider} from 'semantic-ui-react'



const IconUsers = () => <Icon disabled name='users' />
const IconLeftQuote = () => <Icon disabled name='quote left' />
const IconRightQuote = () => <Icon disabled name='quote right'/>
const IconUser = () => <Icon disabled name='user circle outline'/>



const GITHUB_USER_INFO = "https://api.github.com/users/korenenyles";

class App extends Component{
  state= {
    user:{},
    active: false
  };

handleToggle=(event)=>{
  console.log("button clicked");
  if (this.state.active === true){
    this.setState({ active: false })
  } else {
  fetch(GITHUB_USER_INFO)
  .then(res => res.json())
  .then(user => {
    this.setState({user, active: true});
  })}

};

render(){
  return(
  <React.Fragment>
  <Button className="ui button" onClick={this.handleToggle}>Toggle</Button>
  {this.state.active === true && (
  <div>
    <Card><Image src = {this.state.user.avatar_url} alt="avatar" />
    <p className ="username"><IconUser/> {this.state.user.name}</p>
    <p className="bio"><IconLeftQuote/> {this.state.user.bio} <IconRightQuote/></p>
    <Divider/>
    <p className="followers"><IconUsers/>{this.state.user.followers} Followers</p></Card>
  </div>
  )}
  </React.Fragment>
  )
}
}

export default App;