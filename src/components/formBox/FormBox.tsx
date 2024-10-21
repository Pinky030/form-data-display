import { FormBoxProps } from "./FormBox.types"
import './FormBox.css'
  
const displayItem = (label: string, data: string) => {
    return <div className="formItem" key={data}>
        <div className="label">{label}</div>
        <div className="data">{data}</div>
    </ div>
}

const FormBox: React.FC<FormBoxProps> = (props) => {
    return (
        <div>
            <h3>{props.formTitle}</h3>
            <div className="formContainer">
            {Object.entries(props.data).map(([key, value]) => {
                let label = props.fieldName.find((v) => v.relatedKey === key)?.label ?? "";

                return displayItem(label, value);
            })}

            </div>
        </div>
    )
}

export default FormBox;