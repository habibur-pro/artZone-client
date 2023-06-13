import { useQuery } from "react-query";
import useAuth from '../../hooks/useAuth'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import Spinner from '../../components/Spinner'
import moment from 'moment';
const EnroledClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: enroledData = [], isLoading } = useQuery({
        queryKey: ['enroledClasses', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/enroledClasses/${user?.email}`)
            console.log('enroled data', res.data)
            return res.data
        }
    })


    return (
        <div>
            {
                isLoading ? < Spinner />
                    :
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border-spacing-3 border-secondary border-b">

                                <th className="text-base">Image</th>
                                <th className="text-base">Name</th>
                                <th className="text-base">Class Id</th>
                                <th className="text-base">Teacher Name</th>
                                <th className="text-base">Price</th>
                                <th className="text-base">Enroled Date</th>
                                <th className="text-base">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enroledData.map(enrole => <tr
                                    key={enrole._id}

                                >
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={enrole?.image} alt="Class Image" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{enrole?.className}</td>
                                    <td>{enrole?.classId}</td>
                                    <td>{enrole?.teacher_name}</td>
                                    <td>${enrole?.price}</td>
                                    <td>{moment(enrole?.enroled_date).format(' Do MMMM YYYY')}</td>
                                    <td>{enrole?.status}</td>



                                </tr>)
                            }

                        </tbody>


                    </table>
            }

        </div>
    );
};

export default EnroledClass;