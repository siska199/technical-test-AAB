import useUniversity, { TUniversity } from '../../hooks/university/useUniversity';


const TableUniversities = () => {
  const {listUniversity, handleGetUniversity, handleShowModalUniv} = useUniversity()

  const handleGetDetaiUniversity = (university:TUniversity)=>{
    handleGetUniversity(university?.no)
    handleShowModalUniv()
  }
  return (
    <div className="glass-card p-4 ">
      <table className="items-center bg-transparent w-full border-collapse ">
      <thead>
        <tr>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            No
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Nama Universitas
          </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            Website
          </th>
        </tr>
      </thead>

      <tbody>
        {
          listUniversity?.map((university,no)=>
            <tr onClick={()=>handleGetDetaiUniversity(university)} className='cursor-pointer hover:bg-gray-100'>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                {no+1}
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                {university.name}
              </td>
              <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {university.web_pages}
              </td>
            </tr>
          )
        }

      </tbody>

      </table>
    </div>
  )
}

export default TableUniversities