import useAuth from "../../hooks/auth/useAuth"
import Button from "../Button"
import Input from "../Input"


const FormLogin = () => {
    const {form,handleLogin,handleOnChange,disabled, loading} = useAuth()

  return (
    <section className="glass-card space-y-4 p-4 flex flex-col"  >
        <Input name={"username"} label={"USERNAME" } value={form.username} onChange={handleOnChange} />
        <Input name={"password"} label={"PASSWORD"} value={form.password} type={"password"} onChange={handleOnChange} />
        <Button onClick={handleLogin} color={"blue"} label={loading? "Loading..." : "login"} customeClass="w-[50%] ml-auto" disabled={disabled || loading}/>
    </section>
  )
}

export default FormLogin