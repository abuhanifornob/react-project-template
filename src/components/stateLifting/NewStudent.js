import React, { useState } from 'react';

export default function NewStudent({ onAddNewStudent }) {
    const [newUser, setNewUser] = useState({
        name: '',
        phone: ''
    });
    const { name, phone } = newUser;
    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNewStudent(newUser);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-6 mb-4">
                        <label htmlFor="name">Enter Your Name : </label>
                        <input className="p-2 m-2 form-control" name="name" id="name" value={name} onChange={handleChange} placeholder="Enter Your Name" type="text" />
                    </div>
                </div>
                <div className="form-group col-6 mb-4">
                    <label htmlFor="name">Enter Your Phone : </label>
                    <input className="p-2 m-2 form-control" name="phone" id="phone" value={phone} onChange={handleChange} placeholder="Enter Your Phone" type="phone" />
                </div>
                <button className="bg-info p-2  mx-5 mb-3" type="submit">
                    Add Student
                </button>
            </form>
        </div>
    );
}
