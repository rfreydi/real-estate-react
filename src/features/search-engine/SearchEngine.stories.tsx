import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchEngine from './SearchEngine.template';
import { action } from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Search Engine',
  component: SearchEngine,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchEngine>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchEngine> = (args) =>
  <SearchEngine {...args} />;

export const Default = Template.bind({});
Default.args = {
  widgetList: {
    list: [
      ...(new Array(4)).fill({
        loan: 750,
        price: 19439543,
        rawYield: 15,
        rent: 1415,
        state: 'BOOKMARKED',
        title: 'Appartement - 24 m2 - Évry-Courcouronnes',
        onClick: action('widget Clicked'),
      }),
      ...(new Array(4)).fill({
        loan: 230,
        price: 97043,
        rawYield: 8,
        rent: 430,
        state: 'POSITIONED_ON',
        title: 'Appartement - 24 m2 - Évry-Courcouronnes',
        onClick: action('widget Clicked'),
      }),
      ...(new Array(4)).fill({
        loan: 500,
        price: 121561,
        rawYield: 6,
        rent: 319,
        state: 'OPEN',
        title: 'Appartement - 24 m2 - Évry-Courcouronnes',
        onClick: action('widget Clicked'),
      }),
    ],
  },
};

export const Empty = Template.bind({});
Empty.args = {
  widgetList: {
    list: [],
  },
};
