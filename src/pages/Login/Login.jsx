import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/User/UserActions";
import "./Login.css";

class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      this.props.history.push("/");
    }
  }

  render() {
    const { loginUser } = this.props;

    return (
      <div className="login-page">
        <h1>Logare</h1>
        <p>Alege providerul</p>
        <button
          className="google btn btn-outline-dark d-flex align-items-center"
          onClick={() => loginUser("google")}
        >
          <i className="bi bi-google"></i>Google SignIn
        </button>
        <button
          className="facebook btn btn-outline-dark d-flex align-items-center"
          onClick={() => loginUser("facebook")}
        >
          <i className="bi bi-facebook"></i>Facebook SignIn
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (provider) => dispatch(loginUser(provider)),
  };
}

function mapStateToProps(state) {
  return {
    userData: state.user.data,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
