import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const useAuth = () => {
    const user = JSON.parse(localStorage.getItem("user") as string)
    const navigate = useNavigate()
    
    const [form, setForm] = useState({
        username : '',
        password : ''
    })

    const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        const isDisabled = !(form.username && form.password);
        setDisabled(isDisabled)
    },[form])

    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleLogin = async ()=>{
        try {
            setLoading(true)
            const response : TResponseAPI = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                    status : 200,
                    message : 'Success Login'
                    });
                }, 1000); 
            });
    
            if(response?.status===200){
                navigate('/universities')
                localStorage.setItem('isAuth', 'true')
                localStorage.setItem('user', JSON.stringify({
                    username : form.username
                }))
            }else{
                alert('Anda tidak dapat login karena telah terjadi kesalahan pada sistem, harap hubungi admin')
            }
            
        } catch (error:any) {
            console.log("error: ", error.message)
        }finally{
            setLoading(false)
        }
    }

    return {form,user,handleLogin,handleOnChange,disabled, loading}
}

export default useAuth