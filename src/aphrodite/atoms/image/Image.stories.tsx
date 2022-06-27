import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Image } from './Image';

export default {
  title: 'atoms/image/Image',
  component: Image,
  args: {
    src: 'https://placekitten.com/g/500/300'
  }
} as ComponentMeta<typeof Image>;


export const Primary = (args: any) => {
  return (
    <div style={{ height: '200px', 'width': '500px'}}><Image {...args}/></div>
  );
}
