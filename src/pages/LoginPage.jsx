import React, { useRef } from 'react'
import Swal from 'sweetalert2';

const userdata = {
    email:"admin@123",
    password:"123"
}

const LoginPage = () => {
    const email = useRef();
    const pass = useRef();

    const formSubmited=(e)=>{
        e.preventDefault();
        if(!email.current.value || !pass.current.value){
            Swal.fire({
                title: "Please fill input",
                icon: "warning"
            });
        }else{
            if (email.current.value === userdata.email && pass.current.value === userdata.password) {
                Swal.fire({
                    title: "Success",
                    icon: "success"
                  });
                  window.location.assign('/dashboard')
            }else{
                Swal.fire({
                    title: "Email or password is wrong!",
                    icon: "error",
                  });
            }
        }
    }

    return (
        <div className='movies-page d-flex align-items-center justify-content-center flex-column'>
            <h1>LOGIN</h1>
            <form onSubmit={formSubmited} className='col-4'>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={email} type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input ref={pass} type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage