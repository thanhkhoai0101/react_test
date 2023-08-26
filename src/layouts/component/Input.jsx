import {useRef, useState} from 'react';
import Item from "./Item.jsx";

const Input = ({ items, setItems}) => {

    const inputRef = useRef(null);
    const [checked,checkedChange] = useState(false);
    const handleSubmit = (evt) => {

        let input = inputRef.current.value;
        const data = input+","+checked;
        evt.preventDefault()
        setItems([...items, data])
        inputRef.current.value = ''
    }

    const handleDelete = (itemToDelete) => {
        setItems(() => items.filter((item) => item !== itemToDelete))
    }
    const handleDeleteAll=()=>{
        setItems([])
    }

    return(
        <div>
            <form onSubmit={(evt) => {handleSubmit(evt)}} style={{marginTop:"20px"}}>
                <input type='text' className="todo-input" required placeholder='item' ref={inputRef} />
                <button className="btn btn-primary">add item</button>
            </form>
            <div className="">
                {items.length > 0 && items.map((item,i)=> (
                    <div key={item} className="d-flex justify-content-between" style={{marginTop:"10px"}}>
                        <Item item={item} setItems={setItems} items={items}></Item>
                        <button className="btn btn-danger" onClick={(evt) => {handleDelete(item)}}>X</button>
                    </div>
                ))}
                <div>
                    <button className="btn btn-danger" style={{marginTop:"30px"}} onClick={()=>handleDeleteAll()}>Delete All</button>
                </div>
            </div>
        </div>
    )
}
export default Input


