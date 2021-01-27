import React  from 'React'
import logo from '../logo.svg'
  export default class Main extends React.Component {
    var [s , sets] = React.useState(0); 
    render() {
      return (
        <div>
          <img src = {logo} />
          <h3>React is awsome!! </h3>
          <button onClick={()=>{
            sets(s++);
          } }>Add count </button>
          <h1>{s}</h1>
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