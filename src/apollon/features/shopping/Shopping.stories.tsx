import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShoopingTemplate } from './Shopping.template';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { action } from '@storybook/addon-actions';
import { TaskType } from '../../../aphrodite/organisms/task-list/TaskList';

export default {
  title: 'apollon/features/shopping/Template',
  component: ShoopingTemplate,
  argTypes: {
     onStarClick: { action: 'onStarClick' }
  },
} as ComponentMeta<typeof ShoopingTemplate>;

const Template: ComponentStory<typeof ShoopingTemplate> = () => {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      label: 'Tache 1',
      selected: false,
    },
    {
      id: 2,
      label: 'Tache 2',
      selected: false,
    }
  ]);
  const onTaskClick =  (task: TaskType) => {
    task.selected = !task.selected;
    setTaskList([...taskList]);
    action('task clicked')(task);
  }
  return <ShoopingTemplate tasks={taskList} onTaskClick={onTaskClick} />;
}

export const Primary = Template.bind({});
Primary.play = async ({ canvasElement }) => {
  const isSelected = (taskId: string) =>
    canvas.getByTestId(taskId).getAttribute('class')?.includes('selected');
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId('task-1'));
  await userEvent.click(canvas.getByTestId('task-2'));
  await expect(isSelected('task-1')).toBe(true);
  await expect(isSelected('task-2')).toBe(true);
}
