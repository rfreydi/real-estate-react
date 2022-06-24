import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';

export default {
  title: 'molecules/icon-button/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'onStarClick' }
  },
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isActive: false
};
