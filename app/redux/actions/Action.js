import store from '../store/store';

//redux Action
const Action={
    //Dispatch an action type updateCategories
    update:(data)=>(
        store.dispatch({type:'update',data})
    ),
    resetS:()=>(
        store.dispatch({type:'reset'})
    )
}

export  default Action;