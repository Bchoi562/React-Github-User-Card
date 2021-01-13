import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios'


class App extends React.Component{
  state = {
    gitFollowers:[]
  }

  
  componentDidMount(){
    axios.get('https://api.github.com/users/bchoi562/followers')
    .then((res)=>{
      console.log(res.data)
      this.setState({
        gitFollowers:res.data
      })
    })
    .catch(err=> console.log(err));
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.gitFollowers !== this.state.gitFollowers){
  //     if(this.state.input === )
  //   }
  // }

  render(){
    console.log(this.state.gitFollowers)
    return(
      <div>
        <h1>See your Github Profile</h1>
        {
          this.state.gitFollowers.map(gitFriends => (
          <img src={gitFriends.avatar_url} alt={gitFriends.avatar_url} key={gitFriends.avatar_url}/>
          ))
        }
      </div>
    )
  }
}

export default App;
