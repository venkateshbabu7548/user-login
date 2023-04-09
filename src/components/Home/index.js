// Write your code here
import {Component} from 'react'

import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  isClicked = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn) {
      this.setState(prevState => ({isLoggedIn: false}))
    } else {
      this.setState(prevState => ({isLoggedIn: true}))
    }
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="con">
        <div className="card">
          {!isLoggedIn && <Message text="Please Login" />}
          {isLoggedIn && <Message text="Welcome User" />}
          {!isLoggedIn && <Login fun={this.isClicked} />}
          {isLoggedIn && <Logout fun={this.isClicked} />}
        </div>
      </div>
    )
  }
}

export default Home
