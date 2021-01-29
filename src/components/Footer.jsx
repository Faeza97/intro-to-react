import React, { Component } from 'react'

export default class heading extends Component {

  //   const contactData = {
//   email: 'info@gmail.com',
//   address: 'Montreal, Canada',
//   phone: '+966666666666',
// };
    render() {
        return (
            <div className="footer">
              <h1>{this.props.contactData.email}</h1> <br/>
              <h1>{this.props.contactData.address}</h1> <br/>
              <h1>{this.props.contactData.phone}</h1><br/>
            </div>
        )
    }
}
