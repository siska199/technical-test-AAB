import { useEffect, useState } from "react"
import endpoints from '../../lib/api/endpoint';

export type TUniversity = {
    no               : number;
    "state-province" : null | string;
    name             : string;
    web_pages        : string[];
    country          : string;
    alpha_two_code   : string;
    domains          : string[];  
}


const useUniversity = () => {
    const [listUniversity, setListUniversity] = useState<TUniversity[]>([])
    const [university, setUniversity] = useState<TUniversity | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        handleGetListUniversity()
    },[])

    const handleGetListUniversity=async()=>{
        try {
            setLoading(true)
            let response = await fetch(endpoints.university)
                response = await response.json() 

            setListUniversity((response as any )?.map((data:any,i:number)=>({
                ...data,
                no : i
            })))
        } catch (error :any) {
            // alert(error.message)
        }finally{
            setLoading(false)
        }
    }

    const handleGetUniversity = (no:number)=>{
        const result = listUniversity?.filter((data)=>data?.no===no)[0]
        setUniversity(result)
    }



  return {listUniversity, handleGetUniversity, university, loading}
}

export default useUniversity