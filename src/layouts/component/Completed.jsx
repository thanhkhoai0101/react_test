import Input from "./Input.jsx";
import {useEffect, useState} from "react";

const Completed = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])
  return <Input items={items} setItems={setItems}/>
}
export default Completed
