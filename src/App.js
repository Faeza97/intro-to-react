import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'




// // Pass this list so that it gets rendered in the Header component.
const navItems = ["Home","Projects","About","Contact"]

  const contactData = {
  email: 'info@gmail.com',
  address: 'Montreal, Canada',
  phone: '+966666666666',
};

function App() {

  return (
    <center>
    <div className="App">
   <Header lables={navItems} ></Header>
    <Main />
    <Footer contactData = {contactData} />
    </div>
    <button onClick={()=>{
      console.log(contactData)
    }}>sub</button>
    </center>
  );
}
  // What you should do ?
  // 1- Create a Footer (function) component. *note on function*
  // 2- Pass the `contactData` variable to that component, and display that info there.
  // 3- Style the footer and make it look good. Like a Real footer :D
  // 4- Add a text failed so that people can subscribe to our amazing news letter. 
  // 5- Add a button labeld `Subscribe` once that button is click. console log the email used in the textfield above.

export default App;
