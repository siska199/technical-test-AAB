import React, { useEffect, useState } from "react"
import endpoints from '../../lib/api/endpoint';

export type TUniversity = {
    no               : number;
    "state-province" : null | string;
    name             : string;
    web_pages        : string;
    country          : string;
    alpha_two_code   : string;
    domains          : string[];  
}


const useUniversity = () => {
    const [listUniversity, setListUniversity] = useState<TUniversity[]>([])
    const [loading, setLoading] = useState(false)
    const initialFormUniversity = {
        no : 0,
        name :'',
        web_pages : ''
    }

    const [formUniversity, setFormUniversity] = useState(initialFormUniversity)

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
                no : i+1,
                web_pages : data?.web_pages[0]
            })))
        } catch (error :any) {
            // alert(error.message)
        }finally{
            setLoading(false)
        }
    }

    const handleGetUniversity = (no:number)=>{
        const result = listUniversity?.filter((data)=>data?.no===no)[0]
        setFormUniversity(result)
    }

    const handleOnChangeFormUniversity = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setFormUniversity({
            ...formUniversity,
            [e.target.name] : e.target.value
        })
    }

    const handleEditUniverity = ()=>{
        const listUniversityUpdate = listUniversity?.map((university)=>university?.no===formUniversity?.no ? ({
            ...university,
            ...formUniversity
        }) : university)

        setListUniversity(listUniversityUpdate)
    }

  return {listUniversity, handleGetUniversity,loading,formUniversity, handleEditUniverity , handleOnChangeFormUniversity,  setFormUniversity }
}

export default useUniversity