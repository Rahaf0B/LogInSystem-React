import Button from "../component/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

// export const Red = () => <Button label="red button" backgroundColor="red" onClick={""}/>
export const Red = Template.bind({}); //to copy the func

Red.args = {
  backgroundColor: "red Button",
  label: "red",
  size: "md",
};
