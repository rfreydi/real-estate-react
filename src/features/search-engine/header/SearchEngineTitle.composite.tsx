import React from 'react';

interface SearchEngineTitleProps {
  count: number;
}

function SearchEngineTitle({ count }: SearchEngineTitleProps) {
  return (
    <div className="space-x-3 flex items-baseline">
      <h1 className="text-2xl ">Ma recherche</h1>
      <span className="text-gray-500">{count} résultats</span>
    </div>
  );
}

export default SearchEngineTitle;
