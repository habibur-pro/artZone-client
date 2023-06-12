import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import TeacherClassRow from "../../components/TeacherClassRow";
import UpDateModal from "../../components/UpDateModal";
import { useState } from "react";



// import UpdateModal from "../../components/UpDateModal";


const MyClasses = () => {


    const { user, isLoading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [updateClass, setUpdateClass] = useState({})



    const { data: classes = [], refetch } = useQuery({
        queryKey: ['selectedItems', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/${user?.email}`)
            const data = res.data;
            console.log('myclasses data', classes)
            return data
        }
    })
    return (
        <div>
            <h3>My Classes</h3>
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
                                    setUpdateClass={setUpdateClass}

                                ></TeacherClassRow>)
                            }

                        </tbody>


                    </table>
                    <UpDateModal updateClass={updateClass}></UpDateModal>

                </div>
            </div>
        </div>
    );
};

export default MyClasses;