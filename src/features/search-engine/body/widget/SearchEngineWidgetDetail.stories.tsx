import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchEngineWidgetDetail from './SearchEngineWidgetDetail.component';

export default {
  title: 'Search Engine/widget detail',
  component: SearchEngineWidgetDetail,
} as ComponentMeta<typeof SearchEngineWidgetDetail>;

const Template: ComponentStory<typeof SearchEngineWidgetDetail> = (args) =>
  <SearchEngineWidgetDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Rendement brut',
  value: '6%',
};
