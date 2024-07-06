import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password, name, photo);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            }).catch(error => {
                console.error(error);
            })


    }


    return (
        <div>
            <Navbar />
            <form onSubmit={handleRegister} className="mx-auto card-body w-full lg:w-1/2 md:2/3">
                <h2 className="text-2xl font-bold text-center">Register your account</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your name</span>
                    </label>
                    <input name="name" type="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="photo" placeholder="Enter your photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <div>
                    <p>Already have an account?
                        <Link className="pl-2 text-red-600 font-semibold" to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;