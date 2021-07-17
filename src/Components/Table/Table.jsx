import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSave } from "../../redux/AC/actionCreators";
import Element from "./Element/Element";
import './table.scss'



const Table = () => {

    const dispatch = useDispatch();

    const clicked = (id) => {
        if (id === arr.length) {
            
            setArr([...arr,<Element click={clicked} key={arr.length+1}  id={arr.length+1}/>]);
            arr.push(<Element click={clicked} key={arr.length+1}  id={arr.length+1}/>);
        }
    }


    const [arr,setArr] = useState([<Element click={clicked} key={1}  id={1}/>,<Element click={clicked} key={2}  id={2}/>,<Element click={clicked} key={3}  id={3}/>,<Element click={clicked} key={4}  id={4}/>]);


    // useEffect(()=> {
        
    //     setArr([...arr,<Element click={clicked} key={0}  id={0}/>])

    
    // },[])



    const saveHandler = (e) => {
        e.preventDefault();
        let data = [];
        let currentIndex = 1;
        let tempData = {};
        for (let el of e.target) {
            if (Number(el.name.slice(-1)) === currentIndex ) {
                
                tempData[el.name.slice(0,-1)] = el.value;

            }else {
                data.push(tempData);
                tempData = {}
                currentIndex+=1;
                tempData[el.name.slice(0,-1)] = el.value;
                
            }
            el.value='';
        }
        if (data) dispatch(fetchSave(data));

        arr.length = 0;
        setArr([<Element click={clicked} key={1}  id={1}/>])
        arr.push(<Element click={clicked} key={1}  id={1}/>)
    }




    return(
        
    <form onSubmit={saveHandler}>
        <div className="element names">
            <span className="names__name element__element">UserID</span>
            <span className="names__name  element__element">Date Registration</span>
            <span className="names__name  element__element">Date Last Activity</span>
        </div>
        {arr}
        <button className="save__button" >Save</button>
    </form>
    )

}


export default Table;