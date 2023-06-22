import React, { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = (event) => {
        setEmail((email) => event.target.value);
    };
    const handlePassword = (e) => {
        setPassword((password) => e.target.value);
    };
    const handleForm = (e) => {
        e.preventDefault();
        const userInfo = {
            email,
            password
        };
        console.log(userInfo);
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" value={email} className="input input-bordered" onChange={handleEmail} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" value={password} className="input input-bordered" onChange={handlePassword} />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
