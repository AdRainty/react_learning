import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let { users, isFirst, isLoading, error } = this.props
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
