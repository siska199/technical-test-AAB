import useUniversity from "../../hooks/university/useUniversity"
import ContainerModal from "../ContainerModal"
import CardUniversity from "./CardUniversity"


const ModalUniversity = () => {
  const {handleShowModalUniv, university} = useUniversity()
  return (
    <ContainerModal onCloseModal={handleShowModalUniv}>
        {
            university && (
                <CardUniversity {...university}/>
            )
        }
    </ContainerModal>
  )
}

export default ModalUniversity