import { StateCreator } from "zustand"
import endpoints from "../../lib/api/endpoint";

export type TUniversity = {
    no               : number;
    "state-province" : null | string;
    name             : string;
    web_pages        : string;
    country          : string;
    alpha_two_code   : string;
    domains          : string[];  
}


export interface TUniversitySLice {
    listUniversity          : TUniversity[];
    university              : null | TUniversity;
    loading                 : boolean;
    modal                   : boolean;
    handleGetListUniversity : ()=>void;
    handleGetUniversity     : (no:number)=>void;
    handleModal             : (stateModal:boolean)=>void;
    handleEditUniversity    : (form:Pick<TUniversity,'no'|'name'|'web_pages'>)=>void
}


const createUniversitySlice : StateCreator<TUniversitySLice,[],[], TUniversitySLice> = (set,get)=>({
    listUniversity  : [],
    university      : null,
    loading         : false,
    modal           : false,

    handleGetListUniversity : async()=>{
        try {
            set({loading : true})
            let response            = await fetch(endpoints.university)
            response                = await response.json() 
            const listUniversity    = (response as any )?.map((data:any,i:number)=>({
                ...data,
                no : i+1,
                web_pages : data?.web_pages[0]
            }))

            set({listUniversity : listUniversity})

        } catch (error:any) {
            console.log("error in function handleGetUniversity : ", error.message)
        }finally{
            set({loading : false})
        }
    },

    handleEditUniversity : (form : Pick<TUniversity,'no'|'name'|'web_pages'>)=>{
        const newListUniversity = get().listUniversity?.map((univ) => form.no===univ?.no ?({
            ...univ,
            ...form
        }) : univ)

        set({listUniversity:newListUniversity})
    },

    handleModal : (stateModal)=>{
        set({modal:stateModal})
    },

    handleGetUniversity : (no:number)=>{
        const university = get().listUniversity?.filter((univ)=>univ.no===no)[0]
        set({university:university})
    }


})






export default createUniversitySlice