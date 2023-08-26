import {useState} from "react";

function Item (props) {
    const [checked,checkedChange] = useState(false);

    return (
        <div className="d-flex align-items-center">
            <input type="checkbox" checked={checked}  onChange={e=>checkedChange(e.target.checked)} style={{marginRight:"10px"}}/>
            <span style={{textDecoration:checked?"line-through":"none"}}>{props.item.split(',')[0]}</span>
        </div>
    )
}

export default Item
