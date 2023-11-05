import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import styles from './styles.module.css';
import spaceImage from '../../assets/space1.png';

const cookies = new Cookies();

const initialState = {
    username: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const handleSubmit = async (e) => {
        e.event.preventDefault();

        const { username, password } = form;
        
        const URL = 'http://localhost:80/auth';

        const { data: { token } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            username, password });
        cookies.set('authorisation', token);
        cookies.set('username', username);

        window.location.reload();
    }

    return (
        <div className={styles.auth__form_container}>
            <div className={styles.auth__form_container_fields}>
                <div className={styles.auth__form_container_fields_content}>
                    <p>{isSignup ? 'Signup' : 'Signin'}</p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.auth__form_container_fields_content_input}>
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className={styles.auth__form_container_fields_content_input}>
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                                />
                        </div>
                        {isSignup && (
                            <div className={styles.auth__form_container_fields_content_input}>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                    />
                            </div>
                        )}
                        <div className={styles.auth__form_container_fields_content_button}>
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                    </form>
                    <div className={styles.auth__form_container_fields_account}>
                        <p>
                            {isSignup
                            ? "Already have an account?"
                            : "Don't have an account?"}
                            <span onClick={switchMode}>
                                {isSignup ? "Signin" : "Signup"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.auth__form_container_image}>
                <img src={ spaceImage } alt="sign in"/>
            </div>
        </div>
    )
}

export default Auth