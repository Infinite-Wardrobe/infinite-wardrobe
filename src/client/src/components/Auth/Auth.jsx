import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import styles from './styles.module.css';
import spaceImage from '../../assets/space1.png';

const cookies = new Cookies();

const initialState = {
    username: '',
    password: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.event.preventDefault();

        const { username, password } = form;

        const { data: { token } } = await axios.post('/api/auth/login', {
            username, password });
        cookies.set('authorisation', token);
        cookies.set('username', username);

        window.location.reload();
    }

    return (
        <div className={styles.auth__form_container}>
            <div className={styles.auth__form_container_fields}>
                <div className={styles.auth__form_container_fields_content}>
                    <p>Signin</p>
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
                        <div className={styles.auth__form_container_fields_content_button}>
                            <button>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.auth__form_container_image}>
                <img src={ spaceImage } alt="sign in"/>
            </div>
        </div>
    )
}

export default Auth