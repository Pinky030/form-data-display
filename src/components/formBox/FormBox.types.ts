export type DisplayFormat = "text" | "boolean" | "radio" | "checkbox";

export type FieldInfo = {
    label: string,
    relatedKey: string,
    displayFormat: DisplayFormat,
    options?: CheckBoxFields
}

export type FormBoxProps = {
    formTitle: string;
    description?: string;
    fieldName: FieldInfo[];
    data: object;
}

export type CheckBoxFields = {
    fieldPropertyName: string;
    fieldLabel: string;
}[]

export type RadioFields = {
    fieldLabel: string;
    fieldName: string;
    fieldValue: string;
}[]