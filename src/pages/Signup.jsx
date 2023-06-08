import MyContainer from "../components/MyContainer";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Signup = () => {
    const [show, setShow] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)
    };



    return (
        <div className="">
            <MyContainer>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-1/3 mt-20 gap-5 border p-5">
                        <h3 className="text-3xl font-bold">Register Your Account</h3>
                        <div className="relative border rounded">
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />


                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                <MdOutlineAlternateEmail />
                            </span>


                        </div>

                        {/* password filed  */}
                        <div className="relative border rounded">
                            <input
                                {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6}$).*/ })}
                                type={show ? 'password' : 'text'}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                <span onClick={() => setShow(!show)}>
                                    {
                                        show ? <AiOutlineEye />
                                            :
                                            <AiOutlineEyeInvisible />
                                    }
                                </span>

                            </span>
                        </div>
                        {/* email error  */}
                        {errors.email && <span className="text-red-500">Email is required</span>}
                        {/* password error  */}
                        {errors.required.password && <span className="text-red-500">Password is required</span>}
                        {errors.password.type = 'pattern' && <span className="text-red-500">Password must have 6 character, 1 capital letter, 1 special character</span>}


                        <input type="submit" value='Signup' className="btn btn-neutral"></input>

                        <p className="text-center">Already Have an Account ?
                            <Link className="ml-1 link" to='/signup'>
                                Login
                            </Link>
                        </p>
                    </form>

                </div>

            </MyContainer>
        </div>
    );
};

export default Signup;