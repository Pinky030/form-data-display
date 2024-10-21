import { Meta, StoryFn } from "@storybook/react/*";
import FormBox from "./FormBox";

const field = [{label:"User Name", relatedKey:"userName"}, {label:"User Id", relatedKey:"userId"}, {label: "Password", relatedKey:"password"}];
const data = {
    userName:"Amy",
    userId:"1231",
    password: "123"
}

export default {
    title: "ReactComponentLibrary/FormBox",
    component: FormBox
} as Meta<typeof FormBox>;

const Template: StoryFn<typeof FormBox> = (args) => <FormBox {...args} />;

export const FirstInterface = Template.bind({});
FirstInterface.args = {
    formTitle:"Test One",
    fieldName: field,
    data: data
};