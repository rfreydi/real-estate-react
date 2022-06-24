import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Task } from './Task';

export default {
  title: 'molecules/task/Task',
  component: Task,
  argTypes: {
     onStarClick: { action: 'onStarClick' }
  },
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Aller faire les courses',
  id: 1
};
