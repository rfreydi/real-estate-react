import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TaskList } from './TaskList';

export default {
  title: 'organisms/task-list/TaskList',
  component: TaskList,
  argTypes: {
     onStarClick: { action: 'onStarClick' }
  },
} as ComponentMeta<typeof TaskList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TaskList> = (args) => <TaskList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Aller faire les courses',
  tasks: [
    {
      id: 1,
      label: 'Tache 1',
      selected: true,
    },
    {
      id: 2,
      label: 'Tache 2',
      selected: false,
    }
  ],
  onStarClick: () => alert('yoo')
};
