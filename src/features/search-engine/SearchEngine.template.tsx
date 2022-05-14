import React from 'react';
import Sidebar from '../../shared/composite/Sidebar';
import SearchEngineTitle from './header/SearchEngineTitle.composite';
import SearchEngineMenu from './header/SearchEnginMenu.composite';
import SearchEngineWidgetList, {
  SearchEngineWidgetListProps,
} from './body/SearchEngineWidgetList.composite';

export interface SearchEngineProps {
  widgetList: SearchEngineWidgetListProps;
}

function SearchEngine({ widgetList }: SearchEngineProps) {
  return (
    <div className="flex h-screen overflow-auto">

      <Sidebar/>

      <div className="w-full flex flex-col space-y-5 pt-10 overflow-auto">
        <div
          className="px-10 space-y-3 md:space-y-0 flex flex-wrap justify-between align-middle items-center">
          <SearchEngineTitle count={widgetList.list.length}/>
          <SearchEngineMenu/>
        </div>
        <SearchEngineWidgetList list={widgetList.list}/>
      </div>
    </div>
  );
}

export default SearchEngine;
