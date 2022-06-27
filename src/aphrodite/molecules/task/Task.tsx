import { ShadowContainer } from '../../atoms/container/shadow-container/ShadowContainer';
import { Text } from '../../atoms/text/Text';
import { IconButton } from '../../molecules/icon-button/IconButton';

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
    className = '',
    label,
    selected,
    onStarClick,
  }: TaskProps
) => {
  const style = cls([ className, 'p-2 px-4 flex items-center bg-white' ]);

  return (
    <ShadowContainer className={style}>
      <div className="flex-1">
        <Text>{label}</Text>
      </div>
      <IconButton onClick={onStarClick} isActive={selected} />
    </ShadowContainer>
  );
};
