import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, isLoading: authLoading } = useAuth()

    const { data: role, isLoading: roleLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !authLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/students/${user?.email}`)
            return res.data.role || 'student'
        }
    })
    return { role, roleLoading }

};

export default useRole;