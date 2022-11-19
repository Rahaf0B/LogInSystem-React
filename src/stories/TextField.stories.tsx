import TextField from "../component/TextField";

export default {
  title: "TextField",
  component: TextField,
  argTypes: { handleChange: { action: "handleChange" } },
};

const Template = (args) => <TextField {...args} />;

// export const Red = () => <Button label="red button" backgroundColor="red" onClick={""}/>
export const text = Template.bind({}); //to copy the func

text.args = {
  placeholder: "yyyy",
  size: "md",
  label: "red",
  borderRadius: 5,
};
