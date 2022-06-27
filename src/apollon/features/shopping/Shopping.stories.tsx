import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoopingTemplate } from './Shopping.template';

export default {
  title: 'apollon/features/shopping/Template',
  component: ShoopingTemplate,
  argTypes: {
     onStarClick: { action: 'onStarClick' }
  },
} as ComponentMeta<typeof ShoopingTemplate>;


const Template: ComponentStory<typeof ShoopingTemplate> = (args) => <ShoopingTemplate {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
