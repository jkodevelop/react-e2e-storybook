import React from 'react';

import Button from '../source/js/components/common/Button.js';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    selected: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  label: 'Button',
};

export const Default = Template.bind({});
Default.args = {
  selected: false,
  label: 'Button',
};
