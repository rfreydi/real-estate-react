export type BackendTaskType = {
  id: number,
  name: string,
};

const fakeGetData = (nb: number, indSelected: number): BackendTaskType[] => {
  const list = [];
  for (let i = 1; i <= nb; i++) {
    list.push({
      id: i,
      name: 'Tache ' + i,
      selected: i === indSelected,
    });
  }

  return list;
};

export const useShopping = () => fakeGetData(5, 3);
