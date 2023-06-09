import axios from "axios"

const baserUrl = import.meta.env.VITE_BASE_URL;

export const saveUser = async (user) => {

    const res = await axios.put(`${baserUrl}/users`, {
        email: user?.email
    })
    const data = res.data
    return data
}