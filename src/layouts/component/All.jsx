import Input from "./Input.jsx";
import {useEffect, useState} from "react";

const All = () => {
    const [items, setItems] = useState(localStorage.getItem('items') === "[]" ?[]: JSON.parse(localStorage.getItem('items')))

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
        console.log(localStorage.getItem('items').split(',')[0])
    }, [items])
  return <Input items={items} setItems={setItems}/>
}
export default All
