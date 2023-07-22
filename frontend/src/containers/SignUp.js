import react, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect } from 'react-router-dom';
import {Helmet } from 'react-helmet';

import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import PropTypes from 'prop-types';



const SignUp = ({setAlert , signup, isAuthenticated}) =>{
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2} = formData;
    const onChange = e => setFormData({...formData,[e.target.name] : e.target.value});

    const onSubmit = e => {
        e.preventDefault();

        if(password !== password2)
            setAlert('Password do not match' , 'error');
        else
            signup({name, email, password, password2})
    };

    if(isAuthenticated)
        return <Redirect  to='/' />;

    return (
        <div className='auth'>
        <Helmet>
            <title>Realest Estate -Sign Up</title>
            <meta
                name = 'description'
                content='Sign up page'
            />
        </Helmet>
        <h1 className='auth_title'>Sign Up</h1>
        <p className='auth_lead'>Create your Account</p>
        <form className='auth_form' onSubmit={e => onSubmit(e)}>
            
            <div className='auth_form_group'>
                <input className='auth_form_input'  type='text' placeholder='Name' name='name' value={name}  onChange={e =>onChange(e)}  required/>
            </div>

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

            <div className='auth_form_group'>
                <input   
                    className='auth_form_input'
                    type='password'
                    placeholder='Conferm Password'
                    name='password2'
                    value={password2}
                    onChange={e =>onChange(e)}
                    minLength='6'

                />
            </div>
            <button className='auth_form_button'>Register</button>
        </form>
        <p className='auth_authtext'>
            Already have an account <Link className='auth_authtext_link' to='/login'>Sign In</Link>
        </p>
    </div>
    )

};

SignUp.propTypes = {
    setAlert: PropTypes.func.isRequired,
    signup:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps , {setAlert, signup})(SignUp);

