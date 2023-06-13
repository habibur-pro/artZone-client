
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const Feadback = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()
    const handleFeadback = (event) => {
        event.preventDefault()
        const feadback = event.target?.feadback?.value;
        console.log('feadback', feadback)

        axiosSecure.patch(`/feadback/classes/${id}`, {
            feadback: feadback
        })
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thank you so much!',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    navigate('/dashboard/manage_classes')
                }
            })
    }



    return (
        <form onSubmit={handleFeadback}>
            <textarea name='feadback' className="w-full focus:outline-none p-5" id="" cols="30" rows="10"
                placeholder="Please provide you feadback"
            ></textarea>
            <input className="btn btn-secondary mt-4" type="submit" value='Send Feadback' />
        </form>
    );
};

export default Feadback;