


const lifeDuration = (dateReg,dateLast) => {
    const newDateReg = new Date(dateReg.split('.').reverse().join('-'));
    const newDateLast = new Date(dateLast.split('.').reverse().join('-'));

    const daysMil = newDateLast - newDateReg;
    return daysMil / (24 * 60 * 60 * 1000);
    
}




const totalDuration = (dateReg) => {
    const newDateReg = new Date(dateReg.split('.').reverse().join('-'));
    const today = new Date();
    const days =  today - newDateReg;
    
    return Math.floor(days/ (24 * 60 * 60 * 1000))
}

const rollingRetention = (backUsers,installUsers) => {
    return 100*(backUsers/installUsers)

}
export {lifeDuration,rollingRetention,totalDuration}