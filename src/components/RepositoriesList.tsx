import React, { useState } from 'react';
//useDipatch gives access to dispatch function from the component itself
import { useDispatch } from 'react-redux';
import {actionCreators} from "../state/index";
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
const RepositoriesList:React.FC = () => {
    const [term,setTerm]  =useState("");
    //To select the state from the redux store
    //We can also use useSelector directly instead of useTypedSelector,but then there will be redux store type issues
    const {error,data,loading} = useTypedSelector((state)=>state.repositories)
    const dispatch = useDispatch()
    const onSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(term))
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e=>setTerm(e.target.value)} />
                <button>
                    Search
                </button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>LOading...</h3>}
            {!error && !loading && data.map((name)=><div key={name}>{name}</div>)}
        </div>
    )
}

export default RepositoriesList
