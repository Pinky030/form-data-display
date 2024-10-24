import { Meta, StoryFn } from "@storybook/react/*";
import FormBox from "../components/formBox/FormBox";
import { FieldInfo } from "../components/formBox/FormBox.types";

const field: FieldInfo[] = [
    { label: "User Name", relatedKey: "userName", displayFormat: "text" },
    { label: "User Id", relatedKey: "userId", displayFormat: "text" },
    { label: "Is VIP", relatedKey: "isVip", displayFormat: "boolean" },
    {
        label: "Book type", relatedKey: "bookType", displayFormat: "checkbox",
        options: [{ fieldLabel: "Type A", fieldPropertyName: "typeA" }, { fieldLabel: "Type B", fieldPropertyName: "typeB" }, { fieldLabel: "Type C", fieldPropertyName: "typeC" }]
    }
];

const data = {
    userName: "Amy",
    userId: "1231",
    isVip: true,
    bookType: ["typeA", "typeC"]
}

export default {
    title: "ReactComponentLibrary/FormBox",
    component: FormBox
} as Meta<typeof FormBox>;

const Template: StoryFn<typeof FormBox> = (args) => <FormBox {...args} />;

export const FirstInterface = Template.bind({});
FirstInterface.args = {
    formTitle: "Test One",
    fieldName: field,
    data: data
};