import axios from "axios";
import { useQuery } from "react-query";


const useGetTeacherClass = (route, limit = 0) => {
    const baseUrl = import.meta.env.VITE_BASE_URL
    const url = `${baseUrl}/${route}?limit=${limit}`
    console.log('rul', url)
    const { data, isLoading } = useQuery({
        queryKey: [route],
        queryFn: async () => {
            const res = await axios.get(`${baseUrl}/${route}?limit=${limit}`)
            console.log('data fro hook', res.data)
            return res.data
        }

    })
    return { data, isLoading };
};

export default useGetTeacherClass;