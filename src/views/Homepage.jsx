import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayUsers: []
    };

    /* Bind requires because using setState */
    this.getAllUsers = this.getAllUsers.bind(this);
    this.getTestUser = this.getTestUser.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get(process.env.REACT_APP_API_URL + "/getAllUsers").then(res => {
      this.setState({
        displayUsers: res.data
      })
    })
  }

  getTestUser() {
    axios.get(process.env.REACT_APP_API_URL + "/getUser?username=test").then(res => {
      this.setState({
        displayUsers: this.state.displayUsers.concat(res.data)
      });
    });
  }

  render() {
    return (
      <div>
        <h1>All Users</h1>
        {this.state.displayUsers.map((user, index) => (
          <li key={user.username + index}>{user.username}</li>
        ))}
        <Button onClick={this.getTestUser}>TEST</Button>
      </div>
    );
  }
}
export default Homepage