import { useMemo, useCallback } from 'react';

import { ShoopingTemplate } from './Shopping.template';

import { useShopping } from './hooks/useShopping';
import { formatTask } from './shoppping.utils';

export const ShoopingScreen = () => {
  const data = useShopping();
  const tasks = useMemo(() => formatTask(data), [ data ]);

  const onTaskClick = useCallback(
    () => {
      alert('Click');
    },
    []
  );

  return <ShoopingTemplate tasks={tasks} onTaskClick={onTaskClick} />;
};
