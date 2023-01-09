import { render } from '@testing-library/react';
import React, { Component } from 'react';
import CardList from '../components/CardList'
// import { robots } from './robots';
import SearchBox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll'

// const state = {
//   robots: robots,
//   searchfield: ''
// }

class App extends Component {
  constructor() {   // STATE
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then ( (response) => {
      return response.json()
    }).then ( (users) => {
      // {}
      this.setState({ robots: users })
    })
    // this.setState({ robots: robots })
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // console.log(event.target.value)
    // const filteredRobots = this.state.robots.filter ( robot => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
    // console.log(filteredRobots)
  }

  render() {
    const filteredRobots = this.state.robots.filter ( robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/> {/* PROPS */}
          </Scroll>
        </div>
      )
    }
    // return (
    //   <div className='tc'>
    //     <h1 className='f1'>RoboFriends</h1>
    //     <SearchBox searchChange={this.onSearchChange}/>
    //      <CardList robots={filteredRobots}/> {/* PROPS */}
    //   </div>
    // )
  }
}

// const App = () => {
//   return (
//     <div className='tc'>
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots}/>
//     </div>
//   )
// }

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
