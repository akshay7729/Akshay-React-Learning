import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const ConfigureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        // root reducer
        compose(
            applyMiddleware(sagaMiddleware),
            composeEnhancer()
        )
    )
    // run middleware with rootsaga
    return store
}

export default ConfigureStore