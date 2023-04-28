import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: ''
  }

  componentDidMount() {
    this.token = PubSub.subscribe('update_data', (_, stateObj) => {
      console.log("receive data: ", stateObj)
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    let { users, isFirst, isLoading, error } = this.state
    return (
      <div className="row">
        {
          isFirst? <h2>Enter name to search !</h2>: 
          isLoading? <h2>Loading result ...</h2>:
          error? <h2 style={{color: 'red'}}>{error.message}</h2>:
          users.map((userObj) => {
            return (
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
