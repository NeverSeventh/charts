import { CALCULATE, SAVE, SHOW_STATS } from "../types"





const saveActionCreator = () => {
    return {type:SAVE}
};

const calculateActionCreator = (payload) => {
    return {type:CALCULATE,payload:payload}
}

const showStatsActionCreator = (payload) => {
    return {type:SHOW_STATS,payload:payload}
}



const fetchSave = (data) => async(dispatch,getState) => {
    if (data.length === 0) return;
    
    data = data.filter(el=> el.id &&el.dateReg&&el.dateLast);
    if (data.length === 0) return;
    const responce = await fetch('https://chartsserver.herokuapp.com/users/save',{
        method:'POST',
        headers:{'Content-type':'application/json;chatset=utf-8'},
        body:JSON.stringify({data})
    });
    dispatch(saveActionCreator());
    
}


const fetchUsers = () => async(dispatch,getState)=> {
    dispatch(showStatsActionCreator(false))
    const responce = await fetch('https://chartsserver.herokuapp.com/users/receive');

    if (responce.status ===200) {
        const data = await responce.json();
        console.log(data);
        dispatch(calculateActionCreator(data))
        dispatch(showStatsActionCreator(true))
    }
} 


export {fetchSave,fetchUsers}