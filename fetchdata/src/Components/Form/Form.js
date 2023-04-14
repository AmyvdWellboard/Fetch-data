import { useState} from "react";
import  FormData  from "../../Data/FormData";
/*import components */
import "../Form/Form.css";

const Form = () => {
    const [query, setQuery] = useState("");
    return(
        <div className="form">
            <input 
            type="text" 
            placeholder="Search..." 
            className="search" 
            onChange={(e) => setQuery(e.target.value)} />
            <ul className="list">

                {FormData.filter(formdata=>formdata.name.toLowerCase().includes(query)).map((formdata) => (
                    <li key={formdata.id} className="listItem">{formdata.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Form;