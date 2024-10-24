import { CheckBoxFields, FormBoxProps, RadioFields } from "./FormBox.types"
import './FormBox.css'

const isCheckBoxOptions = (x: any): x is CheckBoxFields => Array.isArray(x) && x.every(item =>
    typeof item.fieldPropertyName === 'string' &&
    typeof item.fieldLabel === 'string'
);

const isRadioOptions = (x: any): x is RadioFields => Array.isArray(x) && x.every(item => 
    typeof item.fieldLabel === 'string' &&
    typeof item.fieldName === 'string' &&
    typeof item.fieldValue === 'string' 
);

const handleDiaplyFormat = (type: string, label: string, data: any, options?: CheckBoxFields | FormBoxProps) => {
    switch (type) {
        case "boolean":
            let value = data === true ? "Yes" : "No"
            return displayByText(label, value);
        case "checkbox":
            let _options;

            if (isCheckBoxOptions(options) && options !== undefined && options.length > 0) 
                _options = options
            
            return displayByCheckbox(label, data, _options ?? []);
    }

    return displayByText(label, data)
}

const displayByRadio = (label: string, data: string, options: RadioFields) => {
    return <div className="formItem" key={label} >
    <div className="dataLabel">{label}</div>
    <div className="checkboxField">
        {options.map(({ fieldLabel, fieldValue, fieldName }) => {

            return <label key={fieldValue}>
                {fieldLabel}
                <input type="checkbox" name={fieldName} value={fieldValue} />
            </label>
        })}
    </div>
</ div>
}

const displayByCheckbox = (label: string, data: string[], options: CheckBoxFields) => {
    return <div className="formItem" key={label} >
        <div className="dataLabel">{label}</div>
        <div className="checkboxField">
            {options.map(({ fieldLabel, fieldPropertyName }) => {
                let isChecked = data.includes(fieldPropertyName);

                return <label key={fieldPropertyName}>
                    {fieldLabel}
                    <input type="checkbox" checked={isChecked} value={fieldPropertyName} />
                </label>
            })}
        </div>
    </ div>
}

const displayByText = (label: string, data: string) => {
    return <div className="formItem" key={label} >
        <div className="dataLabel">{label}</div>
        <div className="textField">{data}</div>
    </ div>
}

const FormBox: React.FC<FormBoxProps> = (props) => {
    return (
        <div>
            <h3>{props.formTitle}</h3>
            <div className="formContainer">
                {Object.entries(props.data).map(([key, value]) => {
                    let label = props.fieldName.find((v) => v.relatedKey === key)?.label ?? "";
                    let displayType = props.fieldName.find((v) => v.relatedKey === key)?.displayFormat ?? "";

                    if (displayType === "checkbox") {
                        let options = props.fieldName.find((v) => v.relatedKey === key)?.options ?? [];
                        return handleDiaplyFormat(displayType, label, value, options);
                    }

                    return handleDiaplyFormat(displayType, label, value);
                })}
            </div>
        </div>
    )
}

export default FormBox;