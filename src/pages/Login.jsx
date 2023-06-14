import MyContainer from "../components/MyContainer";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SocialLogin from "../components/SocialLogin";
import { ImSpinner10 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const Login = () => {
    const loacation = useLocation()
    const navigate = useNavigate()
    const { logInWithEmailPassword } = useAuth()
    const [loginLoading, setLoginLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [loginError, setLoginError] = useState('')

    const from = loacation?.state?.from?.pathname || '/'


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        setLoginLoading(true)
        logInWithEmailPassword(data?.email, data?.password)

            .then(() => {
                setLoginLoading(false)

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login  Successfull ',
                    showConfirmButton: false,
                    timer: 1000
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginLoading(false)
                setLoginError(error.code)
            })
    };



    return (
        <div className="h-screen mt-16">
            <MyContainer>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-full md:w-1/3 mt-20 gap-5 border p-5">
                        <h3 className="text-3xl font-bold">Please Login</h3>
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
                                {...register("password", { required: true })}
                                type={show ? 'text' : 'password'}
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                <span onClick={() => setShow(!show)}>
                                    {
                                        show ? <AiOutlineEyeInvisible />
                                            :
                                            <AiOutlineEye />

                                    }
                                </span>

                            </span>
                        </div>
                        {/* email error  */}
                        {errors.email && <span className="text-red-500">Email is required</span>}
                        {/* password error  */}
                        {errors.password && <span className="text-red-500">Password is required</span>}

                        {
                            loginError && <p className="text-red-500">{loginError}</p>
                        }
                        <button disabled={loginLoading} type="submit" className="btn btn-neutral">
                            {loginLoading ? <span className="animate-spin text-lg"><ImSpinner10 /></span> : 'Login'}
                        </button>
                        <div className="divider">Or</div>

                        {
                            <SocialLogin from={from} />
                        }

                        <p className="text-center">Have no Account
                            <Link className="ml-1 link" to='/signup'>
                                Signup
                            </Link>
                        </p>
                    </form>

                </div>

            </MyContainer>
        </div>
    );
};

export default Login;