import React from 'react';
import SearchEngineWidget, {
  SearchEngineWidgetProps,
} from './widget/SearchEngineWidget.component';

export interface SearchEngineWidgetListProps {
  list: SearchEngineWidgetProps[];
}

function SearchEngineWidgetList({ list }: SearchEngineWidgetListProps) {
  if (!list?.length) {
    return (
      <span className="px-5 italic">Aucun résultat ne correspond à ces critères, élargissez vos critères pour obtenir plus de résultats.</span>
    );
  }
  return (
    <div
      className="px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 overflow-y-auto justify-items-center">
      {list.map((args) => (
        <SearchEngineWidget {...args} />
      ))}
    </div>
  );
}

export default SearchEngineWidgetList;
