import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';



const UsersForm = ({ addUser, chosenOne, update }) => {

    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")


    useEffect(() => {
        if (chosenOne) {
            setFirst_name(chosenOne.first_name)
            setLast_name(chosenOne.last_name)
            setEmail(chosenOne.email)
            setPassword(chosenOne.password)
            setBirthday(chosenOne.birthday)
        }

    }, [chosenOne])

    const submit = (e) => {

        e.preventDefault()

        const newUser = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if (chosenOne) {
            update(newUser)
        } else {
            addUser(newUser)
        }

    }

    const clear = () => {
        setFirst_name("")
        setLast_name("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }


    return (
        <form onSubmit={submit}
            className="formContainer">
            <h1>New User</h1>
            <button onClick={clear} className="clear"><i class="fa-solid fa-broom"></i></button>
            <div className='input-container'>
                <label htmlFor="first_name" ><i class="fa-solid fa-user"></i></label>
                <input
                    placeholder='Fist Name'
                    type="text"
                    id='first_name'
                    value={first_name}
                    onChange={e => setFirst_name(e.target.value)}
                />
            </div>

            <div className='input-containerName'>
                <label htmlFor="last_name" ></label>
                <input
                    placeholder='Last Name'
                    type="text"
                    id='last_name'
                    value={last_name}
                    onChange={e => setLast_name(e.target.value)}
                />
            </div>

            <div className='input-containerRest'>
                <label htmlFor="email" ><i class="fa-solid fa-envelope"></i></label>
                <input
                    placeholder='Email'
                    type="text"
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className='input-containerRest'>
                <label htmlFor="password" ><i class="fa-solid fa-lock"></i></label>
                <input
                    placeholder='Password'
                    type="password"
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>


            <div className='input-containerRest'>
                <label htmlFor="birthday" ><i class="fa-solid fa-cake-candles"></i></label>
                <input
                    type="date"
                    id='birthday'
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                />
            </div>
            <button type='onSubmit'>{chosenOne ? "Update" : "Submit"}</button>
        </form>
    );
};

export default UsersForm;







