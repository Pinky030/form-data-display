

export type FormBoxProps =  {
    formTitle: string;
    description?: string;
    fieldName: {
        label: string;
        relatedKey: string
    }[];
    data: object;
}