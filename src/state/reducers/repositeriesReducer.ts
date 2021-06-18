import {Action} from "../action"

interface RepositoriesState{
    loading:boolean,
    error:String | null,
    data:string[]
}

const reducer =(state:RepositoriesState,action:Action):RepositoriesState=>{
    switch(action.type){
        case "search_repositories":
            return {loading:true,error:null,data:[]}
        case "repositories_success":
            return {loading:false,error:null,data:action.payload}
        case "search_repositories_error":
            return {loading:false,error:action.payload,data:[]}

        default:
            return state
    }
}
export default reducer