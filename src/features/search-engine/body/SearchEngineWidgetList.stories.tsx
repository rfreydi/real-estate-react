import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchEngineWidgetList from './SearchEngineWidgetList.composite';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Search Engine/widget list',
  component: SearchEngineWidgetList,
} as ComponentMeta<typeof SearchEngineWidgetList>;

const Template: ComponentStory<typeof SearchEngineWidgetList> = (args) =>
  <SearchEngineWidgetList {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: (new Array(14)).fill({
    loan: 500,
    price: 121561,
    rawYield: 6,
    rent: 319,
    state: 'OPEN',
    title: 'Appartement - 24 m2 - Évry-Courcouronnes',
    onClick: action('widget Clicked'),
  }),
};

export const Empty = Template.bind({});
Empty.args = {
  list: [],
};
