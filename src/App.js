import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import Counters from './Components/counters'
import images from './images/default.jpg'

class App extends Component {
  state = { 
    counters: [
        {
        id: 1,
        value:4
        },
        {
            id: 2,
            value:0
        },
        {
            id: 3,
            value:0
        },
        {
            id: 4,
            value:0
        }
    ]
  }
  constructor(props) {
    super(props)
    console.log(this.props)
    
  }
  componentDidMount() {
    console.log('App mounted')
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({counters})

    
  }
  
  onDelete = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id)
    this.setState({counters,})
    
  }
  
  handleReset = counters => {
    const counter = counters.map(c => c.value = 0)
    this.setState({counter})
}

  render() {
    console.log('rendered')
  
    return (
      <React.Fragment>
      <NavBar total = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className='container'>
          <Counters onReset={this.handleReset.bind(this , this.state.counters)}
            onIncrement={this.handleIncrement}
            ondelete={this.onDelete}
            counters={this.state.counters} />
          <p><img src={images} alt='not there' /></p>
      </main>
      </React.Fragment>
      

  );
  }
}

export default App;
