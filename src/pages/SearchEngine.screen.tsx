import SearchEngine from '../features/search-engine/SearchEngine.template';
import {
  SearchEngineWidgetAction,
  SearchEngineWidgetState,
} from '../features/search-engine/body/widget/SearchEngineWidget.component';
import { useState } from 'react';

const REAL_ESTATE_MOCK = [
  {
    'address': {
      'city': 'Roubaix',
      '__typename': 'AddressCard',
    },
    'coverImage': 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/72282092.jpg?k=1b4e25074b9f4186fe781d31054849167f0193595a3ef925f625770586d8b985&o=',
    'financialModel': {
      'grossReturnRate': 8.7,
      'projectBudget': 107550,
      'loanMonthlyAmount': 313.3,
      'annualRentIncome': 6204,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '626287a6f534fb009f0c34a4',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 66,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Bondy',
      '__typename': 'AddressCard',
    },
    'coverImage': 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/306933569.jpg?k=726d2bfed904896d6b36e9beca59fa7306d0bb01cb0b4544774a4278859e0a89&o=',
    'financialModel': {
      'grossReturnRate': 6.6,
      'projectBudget': 148413,
      'loanMonthlyAmount': 384.3,
      'annualRentIncome': 7500,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '625d413008d3a600a3756130',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 37.71,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Choisy-le-Roi',
      '__typename': 'AddressCard',
    },
    'coverImage': 'production/properties/6259ab3df25cb2009e20d58f/cover/1e2468e7-cf15-44b3-b902-201962e42333',
    'financialModel': {
      'grossReturnRate': 5.9,
      'projectBudget': 123749.6,
      'loanMonthlyAmount': 381.1,
      'annualRentIncome': 6000,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '6259ab3df25cb2009e20d58f',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 15,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Tourcoing',
      '__typename': 'AddressCard',
    },
    'coverImage': 'production/properties/618c47d6f8d5ef00044c0ddc/cover/10f1cb79-a3f8-44e2-ad31-3005dcf5ad6a',
    'financialModel': {
      'grossReturnRate': 8.5,
      'projectBudget': 103640.7,
      'loanMonthlyAmount': 438,
      'annualRentIncome': 6960,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '618c47d6f8d5ef00044c0ddc',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 35,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Bordeaux',
      '__typename': 'AddressCard',
    },
    'coverImage': 'production/properties/625437fdb1d35a009ed39695/cover/9ec5fc62-011f-4e8a-95cd-e6640d461fb8',
    'financialModel': {
      'grossReturnRate': 6,
      'projectBudget': 149489.5,
      'loanMonthlyAmount': 388.1,
      'annualRentIncome': 7320,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '625437fdb1d35a009ed39695',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 20,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Marseille',
      '__typename': 'AddressCard',
    },
    'coverImage': 'production/properties/624d5847d10b98009e56b4d3/cover/131a148f-b01a-4ebf-8e61-b1780af71c37',
    'financialModel': {
      'grossReturnRate': 6.3,
      'projectBudget': 134498.2,
      'loanMonthlyAmount': 373.5,
      'annualRentIncome': 6880,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '624d5847d10b98009e56b4d3',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 38,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Rennes',
      '__typename': 'AddressCard',
    },
    'coverImage': 'production/properties/62504e5a63051a00a2c3e805/cover/e9d49407-37f5-40be-95db-79e4e663b3c1',
    'financialModel': {
      'grossReturnRate': 4,
      'projectBudget': 148113.2,
      'loanMonthlyAmount': 239.5,
      'annualRentIncome': 4883,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '62504e5a63051a00a2c3e805',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 28,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
  {
    'address': {
      'city': 'Aix-en-Provence',
      '__typename': 'AddressCard',
    },
    'coverImage': 'production/properties/623f28fef33959003fbd6f0d/cover/417d17f3-694e-4f8b-9e46-9f7a5b32132c',
    'financialModel': {
      'grossReturnRate': 5.4,
      'projectBudget': 140868,
      'loanMonthlyAmount': 310.7,
      'annualRentIncome': 6000,
      '__typename': 'RealEstateCardFinancialModel',
    },
    'id': '623f28fef33959003fbd6f0d',
    'isFavorites': false,
    'isSelected': false,
    'propertyKind': 'Apartment',
    'renting': {
      'locationType': 'Simple',
      '__typename': 'RentingCard',
    },
    'surface': 27,
    'totalLots': 1,
    '__typename': 'RealEstateCard',
  },
];

const widgetStateMapping = ({
  isFavorites,
  isSelected,
}: { isFavorites: boolean, isSelected: boolean }): SearchEngineWidgetState => {
  if (!isFavorites) {
    return 'OPEN';
  }

  if (!isSelected) {
    return 'BOOKMARKED';
  }

  return 'POSITIONED_ON';
};

function SearchEngineScreen() {
  const map = (list: typeof REAL_ESTATE_MOCK) => list.map(r => ({
    imageUrl: r.coverImage,
    title: `${r.propertyKind} - ${r.surface} m² - ${r.address?.city}`,
    loan: r.financialModel.loanMonthlyAmount,
    price: r.financialModel.projectBudget,
    rent: r.financialModel.annualRentIncome / 12,
    rawYield: r.financialModel.grossReturnRate,
    state: widgetStateMapping(r),
    onClick: (action: SearchEngineWidgetAction) => {
      r.isFavorites = ['BOOKMARK', 'POSITION_ON'].includes(action);
      r.isSelected = action === 'POSITION_ON';
      console.log(r);
      setWidgetList({ list: map(list) });
    },
  }));

  const [widgetList, setWidgetList] = useState({
    list: map(REAL_ESTATE_MOCK),
  });

  return (
    <SearchEngine widgetList={widgetList}/>
  );
}

export default SearchEngineScreen;
