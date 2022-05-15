import React from 'react';

interface SearchEngineTitleProps {
  count: number;
}

function SearchEngineTitle({ count }: SearchEngineTitleProps) {
  return (
    <div className="space-x-3 flex items-baseline">
      <h1 className="text-2xl ">My research</h1>
      <span className="text-gray-500">{count} results</span>
    </div>
  );
}

export default SearchEngineTitle;
