import React from 'react'
//For getting access to redux store
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from "./RepositoriesList"
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>
                    Check
                </h1>
                <RepositoriesList />
            </div>
        </Provider>
    )
}

export default App
