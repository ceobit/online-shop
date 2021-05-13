interface ICountries {
    flag: string;
    name: string;
    code: string;
}

const countries: ICountries[] = [
  {
    flag: '🇺🇸',
    name: 'USA',
    code: '+1',
  },
  {
    flag: '🇷🇺',
    name: 'Russia',
    code: '+7',
  },
  {
    flag: '🇩🇪',
    name: 'Germany',
    code: '+49',
  },
];

export default countries;
