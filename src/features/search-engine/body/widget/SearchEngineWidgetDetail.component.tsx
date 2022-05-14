import React from 'react';

interface SearchEngineWidgetDetailProps {
  title: string;
  value: string;
}

function SearchEngineWidgetDetail({
  title,
  value,
}: SearchEngineWidgetDetailProps) {
  return (
    <div className="flex space-x-2 items-center">
      <div className="border-l border-neutral-300">&nbsp;</div>
      <div className="flex flex-col">
        <small className="text-neutral-500">{title}</small>
        <span className="font-medium">{value}</span>
      </div>
    </div>
  );
}

export default SearchEngineWidgetDetail;
