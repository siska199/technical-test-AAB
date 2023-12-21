import { useEffect, useState } from "react"
import Button from "../Button"
import Input from "../Input"
import { useNavigate } from "react-router-dom"


const FormLogin = () => {
    
    const navigate = useNavigate()
    
    const [form, setForm] = useState({
        username : '',
        password : ''
    })

    const [disabled, setDisabled] = useState(true)

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
        const response : TResponseAPI = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                status : 2000,
                message : 'Success Login'
                });
            }, 2000); 
        });

        if(response?.status===200){
            navigate('/universities')
        }
    }

    
  return (
    <section className="glass-card space-y-4 p-4 flex flex-col"  >
        <Input name={"username"} label={"USERNAME" } value={form.username} onChange={handleOnChange} />
        <Input name={"password"} label={"PASSWORD"} value={form.password} type={"password"} onChange={handleOnChange} />
        <Button onClick={handleLogin} color={"blue"} label={"login"} customeClass="w-[50%] ml-auto" disabled={disabled}/>
    </section>
  )
}

export default FormLogin