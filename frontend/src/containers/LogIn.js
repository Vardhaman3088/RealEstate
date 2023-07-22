import React, { useState } from 'react';
import react from 'react';
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import  {Helmet} from 'react-helmet';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';


const Login = ({login, isAuthenticated }) =>{
    const  [formData, setFormData] = useState({
    email:'',
    password:''
    });
    const {email, password} =  formData;

    const onChange = e => setFormData({...formData,[e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };
    if(isAuthenticated)
        return <Redirect to='/' />

    return (
        <div className='auth'>
            <Helmet>
                <title>Realest Estate -Login</title>
                <meta
                    name = 'description'
                    content='login page'
                />
            </Helmet>
            <h1 className='auth_title'>Sign In</h1>
            <p className='auth_lead'>Sign into your Account</p>
            <form className='auth_form' onSubmit={e => onSubmit(e)}>
                <div className='auth_form_group'>
                    <input className='auth_form_input'  type='email' placeholder='email' name='email' value={email}  onChange={e =>onChange(e)}  required/>
                </div>
                <div className='auth_form_group'>
                    <input   
                        className='auth_form_input'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e =>onChange(e)}
                        minLength='6'

                    />
                </div>
                <button className='auth_form_button'>Login</button>
            </form>
            <p className='auth_authtext'>
                Don't have an Account <Link className='auth_authtext_link' to='/signup'>Sign up</Link>
            </p>
        </div>
     );
};
Login.propTypes = {
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated 

});

export default connect(mapStateToProps, {login})(Login);

// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// import { login } from '../actions/auth';
// import { SET_AUTHENTICATED } from '../actions/types'; // Import the setAuthenticated action

// const Login = ({ login, isAuthenticated, SET_AUTHENTICATED }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const { email, password } = formData;

//   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = e => {
//     e.preventDefault();
//     login(email, password);
//   };

//   useEffect(() => {
//     // Check if the user has a JWT token in localStorage
//     const token = localStorage.getItem('jwtToken');

//     if (token) {
//         SET_AUTHENTICATED(); // Dispatch the action to set the user as authenticated
//     }
//   }, [SET_AUTHENTICATED]);

//   if (isAuthenticated) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <div className="auth">
//       <Helmet>
//         <title>Realest Estate -Login</title>
//         <meta name="description" content="login page" />
//       </Helmet>
//       <h1 className="auth_title">Sign In</h1>
//       <p className="auth_lead">Sign into your Account</p>
//       <form className="auth_form" onSubmit={e=>onSubmit(e)}>
//         <div className="auth_form_group">
//           <input
//             className="auth_form_input"
//             type="email"
//             placeholder="email"
//             name="email"
//             value={email}
//             onChange={e =>onChange(e)}
//             required
//           />
//         </div>
//         <div className="auth_form_group">
//           <input
//             className="auth_form_input"
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={e =>onChange(e)}
//             minLength="6"
//           />
//         </div>
//         <button className="auth_form_button">Login</button>
//       </form>
//       <p className="auth_authtext">
//         Don't have an Account <Link className="auth_authtext_link" to="/signup">Sign up</Link>
//       </p>
//     </div>
//   );
// };

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
//   SET_AUTHENTICATED: PropTypes.func.isRequired
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { login, SET_AUTHENTICATED })(Login);
