import Button from "../Button";
import Input from "../Input";


type TProps = {
    onClose    : ()=>void;
    onEdit : ()=>void;
    form : {
      no : number;
      name : string;
      web_pages : string;
    }
    onChange    : (e : React.ChangeEvent<HTMLInputElement>)=>void;
}

const FormUniversity = (props:TProps) => {
    const {form,onClose , onChange,onEdit} = props;
    

    
    const handleSave = ()=>{
        onClose()
        onEdit()
    }
  return (
    <div className='space-y-4 p-4 '>
        <h3>No: {form.no}</h3>
        <Input name={"name"} label={"Nama Universitas" } value={form.name} onChange={onChange} />
        <Input name={"web_pages"} label={"Website"} value={form.web_pages} onChange={onChange} />
        <Button label={"Save"} onClick={handleSave} color={"blue"} customeClass="w-[50%] ml-auto" />
    </div>

  )
}

export default FormUniversity