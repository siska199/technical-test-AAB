import { TUniversity } from "../../hooks/university/useUniversity";
import ContainerModal from "../ContainerModal";
import CardUniversity from "./CardUniversity";

type TProps = {
  onClose    : ()=>void;
  university : TUniversity;
}

const ModalUniversity = (props:TProps) => {
  const {onClose, university} = props
  return (
    <ContainerModal onCloseModal={onClose}>
        {
            university && (
                <CardUniversity {...university}/>
            )
        }
    </ContainerModal>
  )
}

export default ModalUniversity