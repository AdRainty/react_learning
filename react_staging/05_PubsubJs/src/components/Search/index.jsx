import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    let { keyWordElement : {value: keyWord} } = this
    PubSub.publish('update_data', {isFirst: false, isLoading: true})
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        PubSub.publish('update_data', {isLoading: false, users: response.data.items})
        // this.props.updateAppState({isLoading: false, users: response.data.items})
      },
      error => {
        // this.props.updateAppState({isLoading: false, error: error})
        PubSub.publish('update_data', {isLoading: false, error: error})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={c => this.keyWordElement = c} placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
