interface ICountries {
    flag: string;
    name: string;
    code: string;
}

const countries: ICountries[] = [
  {
    flag: 'πΊπΈ',
    name: 'USA',
    code: '+1',
  },
  {
    flag: 'π·πΊ',
    name: 'Russia',
    code: '+7',
  },
  {
    flag: 'π©πͺ',
    name: 'Germany',
    code: '+49',
  },
];

export default countries;
