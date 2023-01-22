import './UserCard.css';
import userAvatar from './userAvatar.png';
import { useState } from 'react';

export default function UserCard({currentUser, isOpen}){
    const [window, setWindow] = useState('login')
    if(currentUser !== null){
        return (
            <div>
                <div className={`userCard rounded shadow ${isOpen ? 'userCardActive' : ''}`}>
                    <img className='w-50' src={currentUser.avatar === null ? userAvatar : currentUser.avatar}/>    
                    <p className='m-0'><b>{currentUser.name + ' ' + currentUser.surname}</b></p>
                    <p className='m-0'>Your sale percent : {currentUser.salePercent}%</p>
                    <button className='btn btn-outline-warning p-0 pb-1 mt-2 w-100'>Log Out <i className='fa fa-sign-out'></i></button>
                </div>        
            </div>
        );
    }else{
        return (
            <div className={`userCard rounded shadow ${isOpen ? 'userCardActive' : ''}`}>
                    <div className={`login border rounded shadow p-2 ${window !== 'login' ? 'd-none' : ''}`}>
                        <h5>Log in</h5>
                        <input className='form-control my_input' placeholder='Email' type='mail'/>
                        <input className='form-control my_input mt-2' placeholder='Password' type='password'/>
                        <div className='text-left'>
                            <input type='checkbox' className='align-middle'/> <span className='rmp'>Remember me.</span>
                        </div>
                        <button className='btn btn-success w-100 p-0 text-white mt-2'>Log in</button>
                    </div>
                    <div className={`register border rounded shadow p-2 ${window !== 'register' ? 'd-none' : ''}`}>
                        <h5>Register</h5>
                        <input className='form-control my_input' placeholder='Name' type='text'/>
                        <input className='form-control my_input mt-2' placeholder='Surname' type='text'/>
                        <input className='form-control my_input mt-2' placeholder='Email' type='mail'/>
                        <input className='form-control my_input mt-2' placeholder='Password' type='password'/>
                        <input className='form-control my_input mt-2' placeholder='Password repeat' type='password'/>
                        <button className='btn btn-success w-100 p-0 text-white mt-2'>Register</button>
                    </div>
                

                <div className='userCardNav d-flex mt-2'>
                    <div className='loginNav w-100'>
                        <button onClick={() => setWindow('login')} className={`btn ${window === 'login' ? 'btn-info': 'btn-outline-info'} w-100 p-0`}>Log in</button>
                    </div>
                    <div className='registerNav w-100'>
                        <button onClick={() => setWindow('register')} className={`btn ${window === 'register' ? 'btn-info': 'btn-outline-info'} w-100 p-0`}>Register</button>
                    </div>
                </div>
            </div>
        );
    }
}
