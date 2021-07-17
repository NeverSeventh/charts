import './element.scss'



const Element = ({id,click}) => {

    const clickHandler = (e)=> {
        click(id);
        
    }


    return (
        <div  onClick={clickHandler} className="element">
            
            <input type="text" className="element__element" name={'id' +id} />
            <input type="text" className="element__element" name={'dateReg' +id} />
            <input type="text" className="element__element" name={'dateLast'+id}/>
        </div>
        
    )
}


export default Element;