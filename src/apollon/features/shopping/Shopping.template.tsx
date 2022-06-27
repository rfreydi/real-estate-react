import { Image } from '../../../aphrodite/atoms/image/Image';
import { TaskList, TaskListProps } from '../../../aphrodite/organisms/task-list/TaskList';

type ShoopingTemplateProps =
  & TaskListProps
  & {
    onTaskClick: () => void,
  };

export const ShoopingTemplate = (
  {
    tasks,
    onTaskClick,
  }: ShoopingTemplateProps
) => {
  return (
    <div className="flex  bg-gray-50 p-4">
      <div className="w-[200px] h-screen bg-blue-50" />
      <div className="px-4">
        <div><Image src="https://placekitten.com/1800/200" className="mb-4" /></div>
        <TaskList tasks={tasks} title="Epicerie" onStarClick={onTaskClick} />
      </div>
    </div>
  );
};
