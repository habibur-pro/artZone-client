import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL;

// save user to db
export const saveUser = async (user) => {
    console.log('user from saved user', user)
    const res = await axios.put(`${baseUrl}/users`, {
        email: user?.email
    })
    const data = res.data
    return data
}

// create token 

export const createToken = async (user) => {
    if (user.email) {
        const res = await axios.post(`${baseUrl}/jwt`, {
            emai: user.email
        })
        const data = res?.data;
        localStorage.setItem('access-token', data?.token)
    }

}

export const getRole = async (email) => {
    const res = await axios.get(`${baseUrl}/users/${email}`)
    const data = res.data;
    return data?.role || 'user'
}