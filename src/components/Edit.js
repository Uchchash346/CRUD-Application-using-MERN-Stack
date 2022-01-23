import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Edit = () => {
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: "",
    });
    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    return (
        <div>
            <div className="container">
                <NavLink to="/">Home</NavLink>
                <form className="mt-4">
                    <div className="row">
                        <div className="mb-3 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="name" value={inpval.name} onChange={setData} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" className="form-label">E-Mail</label>
                            <input type="email" name="email" onChange={setData} value={inpval.email} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" className="form-label">Age</label>
                            <input type="text" name="age" onChange={setData} value={inpval.age} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" className="form-label">Mobile</label>
                            <input type="number" name="mobile" onChange={setData} value={inpval.mobile} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" className="form-label">Work</label>
                            <input type="text" name="work" onChange={setData} value={inpval.work} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-6 col-md-6 col-12">
                            <label for="exampleInputPassword1" className="form-label">Address</label>
                            <input type="text" name="address" onChange={setData} value={inpval.add} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 col-lg-12 col-md-12 col-12">
                            <label for="exampleInputPassword1" className="form-label">Description</label>
                            <textarea name="desc" onChange={setData} value={inpval.desc} className="form-control" id="" cols="30" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
