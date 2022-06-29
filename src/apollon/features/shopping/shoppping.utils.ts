import { BackendTaskType } from './hooks/useShopping';
import { TaskTypeTaskListType } from '../../../aphrodite/organisms/task-list/TaskList';

type FormatTaskType = (tasks: BackendTaskType[]) => TaskTypeTaskListType;
export const formatTask: FormatTaskType = tasks => tasks.map(({ name, ...rest }) => ({
  ...rest,
  label: name,
}));
