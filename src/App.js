import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';
class App extends Component {
  state = {
    users: [],
    searchField: ''
  }
  filteredUser = this.state.users;

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ users: users })
      })
  }

  render() {
    const filteredUser = this.state.users.filter(user => {
      return user.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div className="App">
        <SearchBox placeholder="Search User" handleChange={e => this.setState({ searchField: e.target.value })} />
        <CardList users={filteredUser} />
      </div>
    )
  }
}

export default App;
