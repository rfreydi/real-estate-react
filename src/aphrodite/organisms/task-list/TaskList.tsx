import { useMemo } from 'react';

import { Text } from '../../atoms/text/Text';
import { Task, TaskProps } from '../../molecules/task/Task';

export type TaskTypeTaskListType = Omit<TaskProps, 'onStarClick'>[];

export interface TaskListProps {
  title: string,
  tasks: TaskTypeTaskListType,
  onStarClick: () => void,
}

export const TaskList = (
  {
    tasks,
    title,
    onStarClick,
  }: TaskListProps
) => {
  const list = useMemo(
    () => {
      return tasks.map(({ id, ...rest }) => {
        return <Task key={id} id={id} {...rest} onStarClick={onStarClick} className="mb-2" />;
      });
    },
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
