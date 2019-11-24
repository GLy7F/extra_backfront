import axios  from "axios"
// register
export const register = (newuser)=>{

    return axios.post('/users/register' ,newuser )
    .then(res => console.log("registerd ! ")
    // .catch(err => console.log(err))
    )
}
// login 
export const login = (user)=>{
    return axios.post('/users/login' , user)
    .then(token =>{
        localStorage.setItem('usertoken' , token)
    })
    .catch(err=>console.log(err))
}



