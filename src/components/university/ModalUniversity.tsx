import useBoundStore from "../../store";
import ContainerModal from "../ContainerModal";
import FormUniversity from "./FormUniversity";



const ModalUniversity = () => {
  const {handleModal, modal} = useBoundStore((state)=>state)

  return (
    <ContainerModal state={modal} onCloseModal={()=>handleModal(false)}>
      <FormUniversity/>
    </ContainerModal>
  )
}

export default ModalUniversity