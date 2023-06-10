import { ImSpinner10 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { saveUser } from "../api/auth";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { loginWithGoogle } = useAuth()
    const [googleLoading, setGoogleLoading] = useState(false)

    const handleGoogleLogin = () => {
        setGoogleLoading(true)
        loginWithGoogle()
            .then(loggedUser => {
                console.log('google user', loggedUser.user)
                saveUser(loggedUser?.user)
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Login Successfull ',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        setGoogleLoading(false)
                    })
                    .catch(error => {
                        console.log(error)
                        setGoogleLoading(false)
                    })

            })
            .catch(error => {
                console.log('google error', error)
                setGoogleLoading(false)
            })
    }


    return (
        <div onClick={handleGoogleLogin} className="text-lg text-center inline-flex items-center cursor-pointer justify-center py-2.5 rounded bg-neutral-200 gap-3 border  mx-auto w-full ">

            {
                googleLoading ? <span className="animate-spin text-lg"><ImSpinner10 /></span> :
                    <>  <span className="text-2xl"> <FcGoogle /> </span>Continue With Google</>
            }


        </div>
    );
};

export default SocialLogin;
