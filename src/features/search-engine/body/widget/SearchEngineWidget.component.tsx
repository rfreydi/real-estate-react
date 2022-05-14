import React from 'react';
import SearchEngineWidgetDetail
  from './SearchEngineWidgetDetail.component';

export type SearchEngineWidgetAction =
  'BOOKMARK'
  | 'POSITION_ON'
  | 'UNBOOKMARK';
export type SearchEngineWidgetState = 'OPEN' | 'BOOKMARKED' | 'POSITIONED_ON';

export interface SearchEngineWidgetProps {
  loan: number;
  price: number;
  rawYield: number;
  rent: number;
  title: string;
  state: SearchEngineWidgetState;

  onClick: (action: SearchEngineWidgetAction) => void;
}

const action = (state: SearchEngineWidgetState): SearchEngineWidgetAction => {
  switch (state) {
    case 'OPEN':
      return 'BOOKMARK';
    case 'BOOKMARKED':
      return 'POSITION_ON';
    case 'POSITIONED_ON':
      return 'UNBOOKMARK';
    default:
      throw new Error(`Cannot define action for state "${state}"`);
  }
};

const color = (state: SearchEngineWidgetState) => state === 'POSITIONED_ON'
  ? 'bg-stone-200'
  : 'bg-green-900 text-white';

const label = (state: SearchEngineWidgetState) => {
  switch (state) {
    case 'OPEN':
      return 'Intéressé';
    case 'BOOKMARKED':
      return 'Me positionner';
    case 'POSITIONED_ON':
      return 'Plus intéressé';
    default:
      throw new Error(`Cannot define label for state "${state}"`);
  }
};

const value = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

function SearchEngineWidget({
  loan,
  price,
  rawYield,
  rent,
  state,
  title,
  onClick,
}: SearchEngineWidgetProps) {
  return (
    <div className="w-80 m-5 rounded-lg shadow-lg flex flex-col"
         style={{ height: '26rem' }}>
      <div
        className="h-36 bg-cover bg-no-repeat bg-center rounded-t-lg flex-none"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/masteos/tr:ar-3-2,w-335/production/properties/62755b330b9ee200b68df891/cover/fbf91160-3a80-4122-9079-c6afde8a11af')`,
        }}></div>
      <div
        className="w-full h-full px-8 flex flex-col justify-evenly items-center">
        <span className="text-2xl text-center">{title}</span>
        <div className="w-full grid grid-cols-2">
          <SearchEngineWidgetDetail title="Rendement brut"
                                    value={`${value(rawYield)}%`}/>
          <SearchEngineWidgetDetail title="Budget Total"
                                    value={`${value(price)} €`}/>
          <SearchEngineWidgetDetail title="Loyer mensuel"
                                    value={`${value(rent)} €`}/>
          <SearchEngineWidgetDetail title="Mensualités"
                                    value={`${value(loan)} €`}/>
        </div>
      </div>
      <div className="flex m-3">
        <button
          className={`w-full h-8 px-3 rounded ${color(state)}`}
          onClick={() => onClick(action(state))}
        >
          {label(state)}
        </button>
      </div>
    </div>
  );
}

export default SearchEngineWidget;
