import { ShadowContainer } from '../../atoms/container/shadow-container/ShadowContainer';
import { Text } from '../../atoms/text/Text';
import { Icon } from '../../atoms/icon/Icon';

import { cls } from '../../utils/cls';

export interface TaskProps {
  id: number,
  label: string,
  className?: string,
  selected?: boolean,
  onStarClick: () => void,
}

export const Task = (
  {
    id,
    className = '',
    label,
    selected,
    onStarClick,
  }: TaskProps
) => {
  const style = cls([ className, 'p-2 px-4 flex items-center bg-white' ]);
  const taskClass = cls(['flex-1', ...(selected ? ['selected'] : [])])
  return (
    <ShadowContainer className={style}>
      <div className={taskClass}>
        <Text>{label}</Text>
      </div>
      <Icon testId={`task-${id}`} onIconClick={onStarClick} selected={selected} />
    </ShadowContainer>
  );
};
