import React  from 'react'
import logo from '../logo.svg'
  export default class Main extends React.Component {
    
constructor() {
    super()
    this.state = {
      count: 0
    }
  }
     
    render() {
      return (
        <div>
          <img src={logo} />
          <h3>React is awsome!! </h3>
          <h1>number:{this.state.count}</h1>
          <button onClick={()=>{
            const newCount = this.state.count + 1
        this.setState({
      count: newCount
    })
          } }>Add count </button>
          
        </div>  
      )
    }
  }

  // What to do here:
  // 1- Add an image here and display the `logo.svg` in the src/ file.
  // 2- Add an h3 title with `React is awesome!!`.
  // 3- Add a button labeld `Add count`
  // 4- Add a h1 element with a state of 0
  // 4- Add an event to the previous button so that when we click it the previous state git added by one.