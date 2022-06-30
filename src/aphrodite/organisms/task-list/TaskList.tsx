import { useMemo } from 'react';

import { Text } from '../../atoms/text/Text';
import { Task, TaskProps } from '../../molecules/task/Task';

export type TaskType = Omit<TaskProps, 'onStarClick'>;
export type TaskTypeTaskListType = TaskType[];

export interface TaskListProps {
  title: string,
  tasks: TaskTypeTaskListType,
  onStarClick: (task: TaskType) => void,
}

export const TaskList = (
  {
    tasks,
    title,
    onStarClick,
  }: TaskListProps
) => {
  const list = useMemo(
    () =>
      tasks.map((task) => <Task key={task.id} {...task} onStarClick={() => onStarClick(task)} className="mb-2" />),
    [ tasks, onStarClick ]
  );

  return (
    <div>
      <Text textStyle="h2">{title}</Text>
      <div className="mt-2">
        {list}
      </div>
    </div>
  );
};
