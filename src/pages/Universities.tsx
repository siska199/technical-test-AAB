import ModalUniversity from "../components/university/ModalUniversity"
import TableUniversities from "../components/university/TableUniversities"
import useAuth from "../hooks/auth/useAuth"


const Universities = () => {
  const {user} = useAuth()
  return (
    <article className="space-y-4">
      <h1 className="text-2xl ">Welcome, {user.username}</h1>
      <TableUniversities/>
      <ModalUniversity/>
    </article>
  )
}

export default Universities