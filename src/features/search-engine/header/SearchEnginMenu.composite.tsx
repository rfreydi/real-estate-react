import Icon from '../../../shared/components/Icon';
import React from 'react';
import Button from '../../../shared/components/Button';

export function SearchEngineMenu() {
  return (
    <div className="space-x-3 flex">
      <Button selected={true}>
        <span>Tous</span>
      </Button>
      <Button>
        <Icon name="heart"></Icon>
        <span>Favoris</span>
      </Button>
      <Button>
        <Icon name="target"></Icon>
        <span>Pré-selection</span>
      </Button>
      <Button transparent={true}>
        <Icon name="slider"></Icon>
      </Button>
    </div>
  );
}

export default SearchEngineMenu;
