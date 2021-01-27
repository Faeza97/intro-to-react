import React from 'react'

const Header = ({lables}) => {
  // Add styling so that this looks like a nav :) 
  const navItems = lables.map((item) => {
      // Return an <li> element with the item
  })
  return(
    <header>
      {navItems}
    </header>
  )
}

export default Header;