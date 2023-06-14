import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import TeacherClassRow from "../../components/TeacherClassRow";



// import UpdateModal from "../../components/UpDateModal";


const MyClasses = () => {


    const { user, isLoading } = useAuth()
    const [axiosSecure] = useAxiosSecure()




    const { data: classes = [], refetch } = useQuery({
        queryKey: ['selectedItems', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            const data = res.data;

            return data
        }
    })
    return (
        <div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="border-spacing-3 border-secondary border-b">

                                <th className="text-base">Image</th>
                                <th className="text-base">Name</th>
                                <th className="text-base">Available Seets</th>
                                <th className="text-base">Price</th>
                                <th className="text-base">Status</th>
                                <th className="text-base">Feadback</th>
                                <th className="text-base">Enroled</th>
                                <th className="text-base">Actions</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map(singleClass => <TeacherClassRow
                                    key={singleClass._id}
                                    singleClass={singleClass}
                                    refetch={refetch}


                                ></TeacherClassRow>)
                            }

                        </tbody>


                    </table>


                </div>
            </div>
        </div>
    );
};

export default MyClasses;