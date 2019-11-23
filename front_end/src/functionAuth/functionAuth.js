import axios from "axios"
// registor
export const reqister = (newuser) => {

    return axios.post('/user/registor', newuser)
        .then(res => console.log("registerd!")
            .catch(err => console.log(err))
        )
}
// login
export const login =(user)=>{
return axios.post('/user/login',user)
.them(token=>{
    localStorage.setItem('usertoken',roken)
})
.catch(err=>console.log(err))
    

}