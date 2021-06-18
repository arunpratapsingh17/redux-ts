import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../action";

const searchRepositories=(term:string)=>{
    return async(dispatch:Dispatch<Action>)=>{
        dispatch({
            type:"search_repositories"
        })
        try{
            const {data} = await axios.get("https://registry.npmjs.org/-/v1/search",{
                params:{
                    text:term
                }
            })
            const name = data.objects.map((result:any)=>{
                return result.package.name;
            })
            dispatch({
                type:"repositories_success",
                payload:name
            })
        }
        
        catch(err){
            dispatch({
                type:"search_repositories_error",
                payload:err.message
            })
        }
    }
}