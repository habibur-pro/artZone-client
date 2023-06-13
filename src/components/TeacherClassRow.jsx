
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";




const TeacherClassRow = ({ singleClass, refetch }) => {
    const [axiosSecure] = useAxiosSecure()
    const { name, image, seats, price, status, enroled, _id, feadback } = singleClass || {}

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Your Class Will be deleter permanetnly",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/classes/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Classe has been deleted ',
                                showConfirmButton: false,
                                timer: 1000
                            })
                            refetch()
                        }
                    })
            }
        })

    }


    return (

        <tr className="">
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Class Image" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{seats}</td>
            <td className="text-end">${price}</td>
            <td>{status}</td>
            <td className="underline cursor-pointer" title={feadback}>{feadback ? 'Feadback' : ''}</td>
            <td>{enroled}</td>
            <td>
                <Link className={`${status === 'denied' && 'hidden'}`} to={`/dashboard/update/${_id}`}>
                    <button

                        className='btn btn-xs btn-secondary'>Update</button>
                </Link>

            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-primary'>delete</button>
            </td>

        </tr>



    );
};

export default TeacherClassRow;