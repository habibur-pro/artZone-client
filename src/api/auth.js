import axios from "axios"

const baserUrl = import.meta.env.VITE_BASE_URL;

// save user to db
export const saveUser = async (user) => {


    const res = await axios.put(`${baserUrl}/users`, {
        email: user?.email
    })
    const data = res.data
    return data
}

// create token 

export const createToken = async (user) => {
    if (user.email) {
        const res = await axios.post(`${baserUrl}/jwt`, {
            emai: user.email
        })
        const data = res?.data;
        localStorage.setItem('access-token', data?.token)
    }

}

export const getRole = async (email) => {
    const res = await axios.get(`${baserUrl}/users/${email}`)
    const data = res.data;
    return data?.role || ''
}