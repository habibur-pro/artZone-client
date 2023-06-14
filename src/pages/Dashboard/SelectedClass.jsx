
import useAuth from '../../hooks/useAuth'
import { useQuery } from 'react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Spinner from '../../components/Spinner'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
                                title: 'Your items is deleted',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                        }
                    })
            }
        })


    }



    return (
        <>
            {dataLoading ? <Spinner></Spinner> :
                <div>
                    <div className="overflow-x-auto">

                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr className="border-spacing-3 border-secondary border-b">


                                    <th className="text-base">Image</th>
                                    <th className="text-base">Class Name</th>
                                    <th className="text-base">Teacher Name</th>
                                    <th className="text-base">Teacher Email</th>
                                    <th className="text-base">Available Seats</th>
                                    <th className="text-base">Price</th>
                                    <th className="text-base">Status</th>
                                    <th className="text-base">Actions</th>


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
                                        <td>{singleClass?.teacher_email}</td>
                                        <td>{singleClass?.seats}</td>
                                        <td className='font-bold'>${singleClass?.price}</td>

                                        <td className='font-bold'>{singleClass?.status}</td>

                                        <th className='space-x-3'>
                                            <button

                                                onClick={() => handleDelete(singleClass?._id)} className="btn btn-primary btn-sm">
                                                Delte
                                            </button>
                                            <Link to={`/dashboard/payment/${singleClass?._id}`}>
                                                <button
                                                    className="btn btn-accent btn-sm">
                                                    Pay
                                                </button></Link>

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