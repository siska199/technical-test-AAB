import { useEffect } from 'react';
import useBoundStore from '../../store';
import ModalUniversity from './ModalUniversity';


const TableUniversities = () => {
  const {listUniversity,   loading, handleGetUniversity,handleGetListUniversity, handleModal} = useBoundStore((state)=>state)

  useEffect(()=>{
    handleGetListUniversity()
  },[])
  const handleOnClickData = (no:number)=>{
    handleGetUniversity(no)
    handleModal(true)
  }
  return (
    <div className='relative'>
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
              loading ? 
              <tr>
                <td>
                  <h3 className='text-center my-4'>Loading...</h3>
                </td>
              </tr>
              :
              <>
                {
                  listUniversity?.map((university,no)=>
                    <tr onClick={()=>handleOnClickData(university.no)} key={no} className='cursor-pointer hover:bg-gray-100'>
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
              </>
            }
          </tbody>
        </table>
      </div>

      <ModalUniversity/>
    
    </div>
  )
}

export default TableUniversities