import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth'
import { useQuery } from 'react-query';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Spinner from '../../components/Spinner'
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const { user, isLoading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch, isLoading: dataLoading } = useQuery({
        queryKey: ['selectedItems', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedItems/${user?.email}`)
            const data = res.data;
            return data
        }
    })

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selectedItems/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                        }
                    })
            }
        })


    }


    console.log('user from selected clss', user)
    return (
        <>
            {dataLoading ? <Spinner></Spinner>
                :
                <div>
                    <div className="overflow-x-auto">
                        <table className="table font-">
                            {/* head */}
                            <thead>
                                <tr className='font-bold  border-5 border-secondary border-b'>

                                    <th className='font-bold text-md text-secondary'>image</th>
                                    <th className='font-bold text-md text-secondary'>ClassName</th>
                                    <th className='font-bold text-md text-secondary'>Teacher</th>
                                    <th className='font-bold text-md text-secondary'>Price</th>
                                    <th className='font-bold text-md text-secondary'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    classes.map(singleClass => <tr
                                        key={singleClass._id}
                                    >
                                        <td>
                                            <div className="avatar">
                                                <div className="mask rounded w-16 h-16">
                                                    <img src={singleClass?.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{singleClass?.name}</td>
                                        <td>{singleClass?.teacher_name}</td>
                                        <td className='font-bold'>${singleClass?.price}</td>
                                        <th className='space-x-3'>
                                            <button onClick={() => handleDelete(singleClass?._id)} className="btn btn-primary text-lg btn-sm  text-white">
                                                <AiOutlineDelete />
                                            </button>
                                            <button className="btn btn-accent text-lg btn-sm  text-white">
                                                <MdOutlinePayment />
                                            </button>

                                        </th>
                                    </tr>)
                                }


                            </tbody>



                        </table>
                    </div>
                </div>
            }
        </>
    );
};

export default SelectedClass;