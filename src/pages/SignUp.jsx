

import { CiFacebook } from "react-icons/ci";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
const SignUp = () => {
    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className="max-w-md bg-white  shadow-2xl w-full mx-auto flex justify-center  items-center my-20">
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="font-bold text-center mb-5">Please SignUp!</h2>

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
                        <input type="submit" value='Sign Up' className="btn border-none text-white bg-green" />

                    </div>
                    <div className="mx-auto text-center mt-4">Already Have Account?
                        <button className="text-black  font-medium pl-2" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <Modal />
                            </div>
                        </dialog>
                    </div>
                    <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link> 
                </form>
                <div className="space-y-3">
                    <div><h1 className="mx-auto mt-3 text-center">or</h1></div>
                    <div className="flex justify-center gap-10 pb-5">
                        <button className="btn btn-circle hover:bg-green hover:text-white"> <CiFacebook /></button>
                        <button className="btn btn-circle hover:bg-green hover:text-white"> <IoLogoGoogle /></button>
                        <button className="btn btn-circle hover:bg-green hover:text-white"><FaGithub /></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;