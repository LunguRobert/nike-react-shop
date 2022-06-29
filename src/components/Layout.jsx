import React from 'react'
import Header from './Header/Header'
import Footer from './Footer'
import SignInModal from './SignInModal/SignInModal'

function Layout(props) {
  

  return (

    <div>
        <SignInModal/>
        <Header/>  
            {props.children}
        <Footer/>
    </div>
    
  )
}

export default Layout