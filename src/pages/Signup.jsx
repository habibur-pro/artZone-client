
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlinePhone } from "react-icons/ai";
import { ImSpinner10 } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import { MdPhotoCamera } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../components/SocialLogin";
import { saveUser } from "../api/auth";



const Signup = () => {
    const [isPassShow, setPassShow] = useState(false)
    const [isConfirmPassShow, setConfirmPassShow] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmError, setConfirmError] = useState('')
    const [registerError, setRegisterError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerWithEmailPassword, updateUserProfile } = useAuth()
    const [registerLoading, setRegisterLoading] = useState(false)




    const imageHostKey = import.meta.env.VITE_IMAGE_UPLOAD_KEY
    const imageHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
    // Todo: revove expiration from imagehosting url

    // validata password and confirm password 
    const valiDatePass = e => {
        const pass = e.target.value;
        setPassword(pass)
    }
    const validataConfirmPass = e => {
        if (password !== e.target.value) {
            setConfirmError('Password not matched')
        }
        else {
            setConfirmError('')
        }
    }


    const onSubmit = (data) => {
        setRegisterError('')
        setRegisterLoading(true)
        const imageFile = data?.photo[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        const { name, email, confirmPassword } = data || {}

        // host photo 
        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((result) => {
                const imageUrl = result?.data?.display_url
                if (imageUrl) {

                    // register user 
                    registerWithEmailPassword(email, confirmPassword)
                        .then(registerResult => {
                            const user = registerResult?.user;

                            // update user profile 
                            if (user?.email) {
                                updateUserProfile(name, imageUrl)
                                    .then(() => {
                                        console.log('signUp user', user)
                                        saveUser(user)
                                            .then(data => {
                                                console.log('from signup', data)
                                            })

                                        setRegisterLoading(false)
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'Registration Successfull ',
                                            showConfirmButton: false,
                                            timer: 1000
                                        })
                                    })
                                    .catch(error => {
                                        setRegisterError(error?.message)
                                        setRegisterLoading(false)
                                    })
                            }
                        })
                        .catch(error => {
                            setRegisterError(error?.message)
                            setRegisterLoading(false)
                        })
                }
            })
            .catch((error) => {
                setConfirmError(error.message)
                setRegisterLoading(false)
            });


    };




    return (
        <div className="flex  justify-center items-center mt-5">
            <>
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col w-auto gap-5 border p-5">
                        <h3 className="text-3xl font-bold text-center mb-5">Register Your Account</h3>

                        {/* name and email  */}
                        <div className="md:grid grid-cols-2 gap-5">
                            {/* name field  */}
                            <div>
                                <div className="relative border rounded ">
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter Full Name"
                                    />


                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                        <BiUser />
                                    </span>

                                </div>
                                {/* name error  */}
                                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                            </div>

                            {/* email filed  */}
                            <div>
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
                                {/* email error  */}
                                {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                            </div>
                        </div>

                        {/* password and confirm password  */}
                        <div className="md:grid grid-cols-2 gap-5">
                            {/* password filed  */}
                            <div>
                                <div className="relative border rounded">
                                    <input
                                        onBlurCapture={valiDatePass}
                                        {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/ })}
                                        type={isPassShow ? 'password' : 'text'}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Password"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                        <span onClick={() => setPassShow(!isPassShow)}>
                                            {
                                                isPassShow ? <AiOutlineEye />
                                                    :
                                                    <AiOutlineEyeInvisible />
                                            }
                                        </span>

                                    </span>
                                </div>
                                {/* password error  */}
                                {
                                    errors.password?.type === 'required' && <span className="text-red-500 text-sm">Password is required</span>
                                }
                                {
                                    errors.password?.type === 'pattern' && <span className="whitespace-pre text-red-500 text-sm">Password must have 6 character, 1 capital letter, 1 special character</span>
                                }
                            </div>


                            {/* confirm password  */}
                            <div>
                                <div className="relative border rounded">
                                    <input
                                        {...register("confirmPassword", { required: true })}
                                        onKeyUp={validataConfirmPass}
                                        type={isConfirmPassShow ? 'password' : 'text'}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Confirm Password"
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                        <span onClick={() => setConfirmPassShow(!isConfirmPassShow)}>
                                            {
                                                isConfirmPassShow ? <AiOutlineEye />
                                                    :
                                                    <AiOutlineEyeInvisible />
                                            }
                                        </span>

                                    </span>
                                </div>
                                {/* confirm password error  */}
                                {
                                    errors.confirmPassword?.type === 'required' && <span className="text-red-500 text-sm">Confirm Password is required</span>
                                }
                                {
                                    confirmError && errors.confirmPassword?.type !== 'required' &&
                                    <span className="text-sm text-red-500">{confirmError}</span>

                                }

                            </div>
                        </div>

                        {/* Photo and Phone  */}
                        <div className="md:grid grid-cols-2 gap-5">
                            {/* Photo Filed */}
                            <div>
                                <div className="relative border rounded ">
                                    <input
                                        {...register("photo", { required: true })}
                                        type="file"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"

                                    />


                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                        <MdPhotoCamera />
                                    </span>

                                </div>
                                {/* Photo error  */}
                                {errors.photo && <span className="text-red-500 text-sm">Photo is required</span>}
                            </div>

                            {/* Phone filed  */}
                            <div>
                                <div className="relative border rounded">
                                    <input
                                        {...register("phone", { required: true })}
                                        type="number"
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                        placeholder="Enter Phone"
                                    />


                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4 text-md">
                                        <AiOutlinePhone />
                                    </span>


                                </div>
                                {/* Phone error  */}
                                {errors.phone && <span className="text-red-500 text-sm">phone is required</span>}
                            </div>
                        </div>



                        {
                            registerError && <p className="text-sm text-red-500">{registerError}</p>
                        }

                        <button disabled={registerLoading} type="submit" className="btn btn-neutral">
                            {registerLoading ? (<span className="animate-spin text-lg"><ImSpinner10 /></span>) : 'Signup'}
                        </button>
                        <div className="divider">Or</div>
                        <SocialLogin />

                        <p className="text-center">Already Have an Account ?
                            <Link className="ml-1 link" to='/login'>
                                Login
                            </Link>
                        </p>
                    </form>

                </div>

            </>
        </div>
    );
};

export default Signup;