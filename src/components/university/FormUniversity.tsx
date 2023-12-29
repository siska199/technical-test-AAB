import { useEffect, useState } from "react";
import useBoundStore from "../../store";
import Button from "../Button";
import Input from "../Input";

const initialForm = {
  no : 0,
  name :'',
  web_pages : ''
}

const FormUniversity = () => {
    const {university,handleModal,handleEditUniversity} = useBoundStore((state)=>state)
    const [form, setForm] = useState(initialForm)

    useEffect(()=>{
      setForm({
        no : university?.no as number,
        name :university?.name as string,
        web_pages : university?.web_pages as string,
      })

      return ()=>{
        setForm(initialForm)
      }
    },[university])

    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSave = ()=>{
      handleEditUniversity(form)
      handleModal(false)
    }
  return (
    <div className='space-y-4 p-4 '>
        <h3>No: {form.no}</h3>
        <Input name={"name"} label={"Nama Universitas" } value={form.name} onChange={handleOnChange} />
        <Input name={"web_pages"} label={"Website"} value={form.web_pages} onChange={handleOnChange} />
        <Button label={"Save"} onClick={handleSave} color={"blue"} customeClass="w-[50%] ml-auto" />
    </div>

  )
}

export default FormUniversity