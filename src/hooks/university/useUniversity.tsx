import { useEffect, useState } from "react"
import endpoints from '../../lib/api/endpoint';

export type TUniversity = {
    "state-province" : null | string;
    name             : string;
    web_pages        : string[];
    country          : string;
    alpha_two_code   : string;
    domains          : string[];  
}


const useUniversity = () => {
    const [listUniversity, setListUniversity] = useState<TUniversity[]>([])

    useEffect(()=>{
        handleGetListUniversity()
    },[])

    const handleGetListUniversity=async()=>{
        try {
            let response = await fetch(endpoints.university)
                response = await response.json() 

            setListUniversity((response as any ))
        } catch (error :any) {
            alert(error.message)
        }
    }

  return {listUniversity}
}

export default useUniversity