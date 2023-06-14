import { useQuery } from "react-query";
import useAuth from "../../hooks/useAuth";

import useAxiosSecure from "../../hooks/useAxiosSecure";


const ManageStudents = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            const data = res.data;
            console.log('all users', data)
            return data
        }
    })

    const handleSetRole = (userEmail, role) => {
        axiosSecure.patch(`/users/${userEmail}`, {
            role: role,
            logged_student: user?.email
        })
            .then(res => {
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

                        <th className="text-base">Image</th>
                        <th className="text-base">Name</th>
                        <th className="text-base">Email</th>
                        <th className="text-base">Role</th>
                        <th className="text-base">Make Admin</th>
                        <th className="text-base">Make Teacker</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(singleUser => <tr
                            key={singleUser._id}

                        >
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleUser?.image} alt="Profile Image" />
                                    </div>
                                </div>
                            </td>
                            <td>{singleUser?.name}</td>
                            <td>{singleUser?.email}</td>
                            <td>{singleUser?.role || 'Student'}</td>
                            <td>
                                <button
                                    disabled={singleUser?.role === 'admin'}
                                    onClick={() => handleSetRole(singleUser?.email, 'admin')}
                                    className="btn btn-secondary btn-xs">Make Admin</button>
                            </td>
                            <td>
                                <button
                                    disabled={singleUser?.role === 'teacher'}
                                    onClick={() => handleSetRole(singleUser?.email, 'teacher')}
                                    className="btn btn-secondary btn-xs">Make Teacher</button>
                            </td>


                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default ManageStudents;