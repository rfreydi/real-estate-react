import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Icon } from './Icon';

export default {
  title: 'atoms/icon/Icon',
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selected: false
};

export const WithOnclick = Template.bind({});
WithOnclick.args = {
  selected: false,
  onIconClick: () => alert('coucou')
};
