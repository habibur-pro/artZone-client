

import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useGetTeacherClass from "../../hooks/useGetTeacherClass";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: classes, refetch } = useGetTeacherClass('classes')
    console.log('all classs', classes)

    const handleApproveDeny = (id, status) => {
        axiosSecure.patch(`classes/${id}`, {
            status: status
        })
            .then(res => {
                console.log('status updated', res.data)
                if (res.data.acknowledged) {
                    refetch()

                }
            })
    }

    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="border-spacing-3 border-secondary border-b">
                        {/* Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback). */}

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
                    {
                        classes.map(singlClass => <tr
                            key={singlClass._id}

                        >
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singlClass?.image} alt="Profile Image" />
                                    </div>
                                </div>
                            </td>
                            <td>{singlClass?.name}</td>
                            <td>{singlClass?.teacher_name}</td>
                            <td>{singlClass?.teacher_email}</td>
                            <td>{singlClass?.seats}</td>
                            <td className="text-end">${singlClass?.price}</td>
                            <td className={`${(singlClass?.status === 'approved' && 'text-green-500')
                                || (singlClass?.status === 'denied' && 'text-red-500')
                                } font-semibold`}>{singlClass?.status}</td>
                            <td className="">
                                <button
                                    disabled={singlClass?.status === 'approved' || singlClass?.status === 'denied'}
                                    onClick={() => handleApproveDeny(singlClass._id, 'approved')}
                                    className="btn btn-secondary btn-xs">Approve
                                </button>
                            </td>
                            <td>
                                <button
                                    disabled={singlClass?.status === 'approved' || singlClass?.status === 'denied'}
                                    onClick={() => handleApproveDeny(singlClass._id, 'denied')}
                                    className="btn btn-primary btn-xs">Deny
                                </button>
                            </td>
                            <td>
                                <Link className={`${(singlClass?.status !== 'denied') && 'hidden'
                                    }`}
                                    to={`/dashboard/feadback/${singlClass._id}`}>
                                    <button
                                        className="btn btn-accent btn-xs">Feadback
                                    </button>
                                </Link>
                            </td>


                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default ManageClasses;