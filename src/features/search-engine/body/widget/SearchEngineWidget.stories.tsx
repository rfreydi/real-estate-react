import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchEngineWidget from './SearchEngineWidget.component';

export default {
  title: 'Search Engine/widget',
  component: SearchEngineWidget,
  args: {
    loan: 500,
    price: 121651,
    rawYield: 6,
    rent: 319,
    title: 'Appartement - 24 m2 - Évry-Courcouronnes',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof SearchEngineWidget>;

const Template: ComponentStory<typeof SearchEngineWidget> = (args) =>
  <SearchEngineWidget {...args} />;

export const Bookmarked = Template.bind({});
Bookmarked.args = {
  state: 'BOOKMARKED',
};

export const Open = Template.bind({});
Open.args = {
  state: 'OPEN',
};

export const PositionedOn = Template.bind({});
PositionedOn.args = {
  state: 'POSITIONED_ON',
};
