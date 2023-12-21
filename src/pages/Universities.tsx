import ModalUniversity from "../components/university/ModalUniversity"
import TableUniversities from "../components/university/TableUniversities"
import useAuth from "../hooks/auth/useAuth"
import useUniversity from "../hooks/university/useUniversity"


const Universities = () => {
  const {user} = useAuth()
  const {showModalUniv} = useUniversity()

  return (
    <article className="space-y-4">
      <h1 className="text-2xl ">Welcome, {user.username}</h1>
      <TableUniversities/>
      {
        showModalUniv && (
          <ModalUniversity/>          
        )
      }
    </article>
  )
}

export default Universities