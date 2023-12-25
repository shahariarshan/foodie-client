/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Modal = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="">
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
                <div className="form-control mt-6">
                    <input type="submit" value='Login' className="btn border-none text-white bg-green" />

                </div>
                <div className="space-y-3 mt-5">
                    <p className="mx-auto text-center">Don't Have Account? <Link to='/signUp' className="text-black  font-medium">Sign Up</Link></p>
                    <h1 className="mx-auto text-center">or</h1>
                    <div className="flex justify-center gap-10 ">
                        <button className="btn btn-circle hover:bg-green hover:text-white"> <CiFacebook /></button>
                        <button className="btn btn-circle hover:bg-green hover:text-white"> <IoLogoGoogle /></button>
                        <button className="btn btn-circle hover:bg-green hover:text-white"><FaGithub /></button>
                    </div>
                </div>
            </form>
        </div>


    );
};

export default Modal;