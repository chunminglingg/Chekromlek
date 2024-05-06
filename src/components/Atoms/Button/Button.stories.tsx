// Typography.stories.js

import React from 'react';
import { Button } from './Button';// Assuming this is the path to your Typography component
import { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Button>= {
  title: 'Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default:Story ={
  args : {
  children: 'Button',
    background:'bg-slate-300'
}};
