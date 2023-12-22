import ContainerModal from "../ContainerModal";
import FormUniversity from "./FormUniversity";

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

const ModalUniversity = (props:TProps) => {
  const {onClose, onEdit, form, onChange} = props
  return (
    <ContainerModal onCloseModal={onClose}>
        {
            form.no && (
                <FormUniversity onClose={onClose} onEdit={onEdit} form={form} onChange={onChange}/>
            )
        }
    </ContainerModal>
  )
}

export default ModalUniversity