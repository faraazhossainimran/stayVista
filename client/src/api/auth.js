
import axiosSecure from '.'

// Save userData in DataBase
export const saveUser = async user=> {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified',
    }
const {data} = await axiosSecure.put(`/users/${user.email}`, currentUser)
return data
}

// get token from server
export const getToken = async email => {
    const {data} = await axiosSecure.post(`/jwt`, email)
    console.log("token servce from server ---------->", data);
    return data
}

// remove token from browser
export const clearCookie = async () => {
    const {data} = await axiosSecure.get(`/logout`)
    return data
}