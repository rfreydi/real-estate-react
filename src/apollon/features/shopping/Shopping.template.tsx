import React from 'react';

import { TaskList, TaskListProps } from '../../../aphrodite/organisms/task-list/TaskList';

interface ShoopingTemplateProps {
  tasks: TaskListProps,
}

export const ShoopingTemplate: ShoopingTemplateProps = (
  {
    tasks,
    onTaskClick,
  }
) => {
  return (
    <div>
      <TaskList tasks={tasks} title="Epicerie" onStarClick={onTaskClick} />
    </div>
  );
};
