import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShadowContainer } from './ShadowContainer';

export default {
  title: 'atoms/container/shadow-container/ShadowContainer',
  component: ShadowContainer,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ShadowContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShadowContainer> = (args) => <ShadowContainer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Hello Word</div>
};
