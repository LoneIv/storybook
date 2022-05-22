import { html } from 'lit-element';
import { UUISearch } from './Search';

export default { 
  title: 'Example/Search',
  argTypes: {
    placeholder: String,
    data: Array,
    input: { action: 'handleSearch' },
  },
};


const Template = ({ label, ...args }) => {
  return `<uui-search></uui-search>`;
};

export const Overview = Template.bind({});

Overview.args = {
  placeholder: 'Find something tasty',
  data: ['apple', 'strawberry', 'pear', 'banana', 'lemon']
};