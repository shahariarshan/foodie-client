/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Modal = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const { signUpWithGoogle, logIn } = useContext(AuthContext)
    const [errorMessage,setErrorMessage] =useState('')

    // redirecting to the home page or specific page 
    const location = useLocation()
    const navigate =useNavigate()
    const from = location.state?.from?.pathname || '/'

    const onSubmit = (data) => {
        const email =data.email;
        const password =data.password;
        // console.log(email,password);
        logIn(email,password)
        .then((result) => {
            // Signed in 
            const user = result.user;
            console.log(user);
            toast.success('Successfully Log In!')
            document.getElementById('my_modal_3').close()
            navigate(from,{replace:true})
          })
          .catch((error) => {
           console.error(error);
        //    toast.error(error.message)
        setErrorMessage('Please Provide the right info ')
          });

    }


    // handelGoogleLogIn withPopUp 
    const handelGoogleLogIn = () => {
        signUpWithGoogle()
            .then((result) => {
                const user = result.user;
                toast.success('Successfully Log In!')
                console.log(user);
                document.getElementById('my_modal_3').close()
                navigate(from,{replace:true})
            }).catch((error) => {
                console.log(error);
                toast.error("Something Wrong.")
            });

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="font-bold text-center mb-5">Please Login!</h2>

                {/* email  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                        {...register("email")} />
                </div>

                {/* password  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                        {...register("password")} />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                {/* error  */}
                {
                    errorMessage? <p className="text-red text-xs">{errorMessage} </p>: ""
                }
                <div className="form-control mt-6">
                <input type="submit" value='Login' className="btn border-none text-white bg-green" />
            </div>
            </form>
            
            <div className="space-y-3 mt-5">
                <p className="mx-auto text-center">Don't Have Account? <Link to='/signUp' className="text-black  font-medium">Sign Up</Link></p>
                <h1 className="mx-auto text-center">or</h1>
                <div className="flex justify-center gap-10 ">
                    <button className="btn btn-circle hover:bg-green hover:text-white"> <CiFacebook /></button>
                    <button onClick={handelGoogleLogIn} className="btn btn-circle hover:bg-green hover:text-white"> <IoLogoGoogle /></button>
                    <button className="btn btn-circle hover:bg-green hover:text-white"><FaGithub /></button>
                </div>
            </div>
        </div>


    );
};

export default Modal;