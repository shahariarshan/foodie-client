import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const { profileUpdate } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const onSubmit = (data) => {
        const name = data.name;
        const photoURL = data.photoURL;
        profileUpdate(name, photoURL)
            .then(() => {
                toast.success('Successfully Update!')
                navigate(from, { replace: true })
            }).catch((error) => {
                console.error(error);
            });

    };
    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className="text-bold text-center">Update Profile</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            {...register("name")}
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text"
                            placeholder="Photo URL"
                            className="input input-bordered"
                            {...register("photoURL")}
                            required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green">Update</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default UpdateProfile;