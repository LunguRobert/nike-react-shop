import React from 'react'
import './SignInModal.css'
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import { loginUser } from '../../redux/User/UserActions'

class SignInModal extends React.Component {

  
  componentDidUpdate(prevProps){
    if(this.props.userData !== prevProps.userData){
      closeModal();
    }
  }

  render(){

    const {loginUser} = this.props;

    return (

      <div className='modala'>
      <div className='login-modal'>
          <button className='close-modal' onClick={()=>{closeModal()}}><i className="bi bi-x-lg"></i></button>
          <h4>Intra in cont</h4>
          <small>Intra in cont pentru a te bucura de intreaga experienta</small>
          <div className='buttons'>
            <button className='google' onClick={()=>{loginUser('google')}}><i className="bi bi-google"></i> Login cu <b>Google</b></button>
            <button className='facebook' onClick={()=>{loginUser('facebook')}}><i className="bi bi-facebook"></i> Login cu <b>Facebook</b></button>
          </div>
      </div>
      </div>
    )

  }

}

function closeModal(){

  let element = document.querySelector('.modala');
  ReactDOM.findDOMNode(element).style.visibility = 'hidden';

}

function mapDispatchToProps(dispatch){
  
  return{
    loginUser: (provider)=> dispatch(loginUser(provider)),
  }

}

function mapStateToProps(state){

  return{
    userData: state.user.data,
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInModal);