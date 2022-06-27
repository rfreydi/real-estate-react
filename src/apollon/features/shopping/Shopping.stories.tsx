import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoopingTemplate } from './Shopping.template';

export default {
  title: 'apollon/features/shopping/Shooping',
  component: ShoopingTemplate,
  argTypes: {
     onStarClick: { action: 'onStarClick' }
  },
} as ComponentMeta<typeof ShoopingTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShoopingTemplate> = (args) => <ShoopingTemplate {...args} />;

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
  onTaskClick: () => alert('yoo')
};
