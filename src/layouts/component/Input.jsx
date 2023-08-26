import { useRef } from 'react';

const Input = ({ items, setItems}) => {

    const inputRef = useRef(null);
    let checkedItem="none";

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setItems([...items, inputRef.current.value])
        inputRef.current.value = ''
    }

    const handleDelete = (itemToDelete) => {
        setItems(() => items.filter((item) => item !== itemToDelete))
    }


    return(
        <div>
            <form onSubmit={(evt) => {handleSubmit(evt)}} style={{marginTop:"20px"}}>
                <input type='text' className="todo-input" placeholder='item' ref={inputRef} />
                <button className="btn btn-primary">add item</button>
            </form>
            <div className="">
                {items.length > 0 && items.map((item)=> (
                    <div key={item} className="d-flex justify-content-between" style={{marginTop:"10px"}}>
                        <div className="d-flex align-items-center">
                            <input type="checkbox" style={{marginRight:"10px"}}/>
                            <span style={{textDecoration:checkedItem}}>{item}</span>
                        </div>
                        <button className="btn btn-danger" onClick={(evt) => {handleDelete(item)}}>X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Input
