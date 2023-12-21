import Button from "../components/Button"
import TableUniversities from "../components/university/TableUniversities"
import useAuth from "../hooks/auth/useAuth"


const Universities = () => {
  const {user, handleLogout} = useAuth()

  return (
    <article className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl ">Welcome, {user.username}</h1>
        <Button onClick={handleLogout} color={"red"} label={"Logout"} customeClass=""/>
      </div>
      <TableUniversities/>   
    </article>
  )
}

export default Universities