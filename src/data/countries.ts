export interface CountryTipInfo {
  tipping_customary: boolean
  recommended_percentage: number
  currency?: any
}

export interface CountriesData {
  countries: {
    [key: string]: CountryTipInfo
  }
}

export const countriesData: CountriesData = {
  countries: {
    Afghanistan: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Afghani', symbol: '؋' },
    },
    Albania: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Lek', symbol: 'L' },
    },
    Algeria: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dinar', symbol: 'د.ج' },
    },
    Andorra: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Angola: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Kwanza', symbol: 'Kz' },
    },
    'Antigua and Barbuda': {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'East Caribbean Dollar', symbol: '$' },
    },
    Argentina: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Peso', symbol: '$' },
    },
    Armenia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dram', symbol: '֏' },
    },
    Australia: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Australian Dollar', symbol: '$' },
    },
    Austria: {
      tipping_customary: true,
      recommended_percentage: 5,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Azerbaijan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Manat', symbol: '₼' },
    },
    Bahamas: {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'Bahamian Dollar', symbol: '$' },
    },
    Bahrain: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Bahraini Dinar', symbol: '.د.ب' },
    },
    Bangladesh: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Taka', symbol: '৳' },
    },
    Barbados: {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'Barbadian Dollar', symbol: '$' },
    },
    Belarus: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Belarusian Ruble', symbol: 'Br' },
    },
    Belgium: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Belize: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Belize Dollar', symbol: '$' },
    },
    Benin: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Bhutan: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Ngultrum', symbol: 'Nu.' },
    },
    Bolivia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Boliviano', symbol: 'Bs.' },
    },
    'Bosnia and Herzegovina': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Convertible Mark', symbol: 'KM' },
    },
    Botswana: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Pula', symbol: 'P' },
    },
    Brazil: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Real', symbol: 'R$' },
    },
    Brunei: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Brunei Dollar', symbol: '$' },
    },
    Bulgaria: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Lev', symbol: 'лв' },
    },
    'Burkina Faso': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Burundi: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Burundian Franc', symbol: 'Fr' },
    },
    'Cabo Verde': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Cape Verdean Escudo', symbol: '$' },
    },
    Cambodia: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Riel', symbol: '៛' },
    },
    Cameroon: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Central African CFA franc', symbol: 'Fr' },
    },
    Canada: {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'Canadian Dollar', symbol: '$' },
    },
    'Central African Republic': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Central African CFA franc', symbol: 'Fr' },
    },
    Chad: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Central African CFA franc', symbol: 'Fr' },
    },
    Chile: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Chilean Peso', symbol: '$' },
    },
    China: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Yuan', symbol: '¥' },
    },
    Colombia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Colombian Peso', symbol: '$' },
    },
    Comoros: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Comorian Franc', symbol: 'Fr' },
    },
    'Congo, Democratic Republic of the': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Congolese Franc', symbol: 'Fr' },
    },
    'Congo, Republic of the': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Central African CFA franc', symbol: 'Fr' },
    },
    'Costa Rica': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Costa Rican Colón', symbol: '₡' },
    },
    Croatia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Kuna', symbol: 'kn' },
    },
    Cuba: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Cuban Peso', symbol: '$' },
    },
    Cyprus: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    'Czech Republic': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Czech Koruna', symbol: 'Kč' },
    },
    Denmark: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Danish Krone', symbol: 'kr' },
    },
    Djibouti: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Djiboutian Franc', symbol: 'Fr' },
    },
    Dominica: {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'East Caribbean Dollar', symbol: '$' },
    },
    'Dominican Republic': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dominican Peso', symbol: '$' },
    },
    Ecuador: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    Egypt: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Egyptian Pound', symbol: '£' },
    },
    'El Salvador': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    'Equatorial Guinea': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Central African CFA franc', symbol: 'Fr' },
    },
    Eritrea: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Nakfa', symbol: 'Nfk' },
    },
    Estonia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Eswatini: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Lilangeni', symbol: 'L' },
    },
    Ethiopia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Birr', symbol: 'Br' },
    },
    Fiji: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Fijian Dollar', symbol: '$' },
    },
    Finland: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    France: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Gabon: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Central African CFA franc', symbol: 'Fr' },
    },
    Gambia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dalasi', symbol: 'D' },
    },
    Georgia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Lari', symbol: '₾' },
    },
    Germany: {
      tipping_customary: true,
      recommended_percentage: 5,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Ghana: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Cedi', symbol: '₵' },
    },
    Greece: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Grenada: {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'East Caribbean Dollar', symbol: '$' },
    },
    Guatemala: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Quetzal', symbol: 'Q' },
    },
    Guinea: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Guinean Franc', symbol: 'Fr' },
    },
    'Guinea-Bissau': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Guyana: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Guyanese Dollar', symbol: '$' },
    },
    Haiti: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Gourde', symbol: 'G' },
    },
    Honduras: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Lempira', symbol: 'L' },
    },
    Hungary: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Forint', symbol: 'Ft' },
    },
    Iceland: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Icelandic Króna', symbol: 'kr' },
    },
    India: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Indian Rupee', symbol: '₹' },
    },
    Indonesia: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Rupiah', symbol: 'Rp' },
    },
    Iran: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Rial', symbol: '﷼' },
    },
    Iraq: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dinar', symbol: 'ع.د' },
    },
    Ireland: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Israel: {
      tipping_customary: true,
      recommended_percentage: 12,
      currency: { currency_name: 'Shekel', symbol: '₪' },
    },
    Italy: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Jamaica: {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'Jamaican Dollar', symbol: '$' },
    },
    Japan: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Yen', symbol: '¥' },
    },
    Jordan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dinar', symbol: 'د.ا' },
    },
    Kazakhstan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Tenge', symbol: '₸' },
    },
    Kenya: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Shilling', symbol: 'Sh' },
    },
    Kiribati: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Australian Dollar', symbol: '$' },
    },
    Kuwait: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dinar', symbol: 'د.ك' },
    },
    Kyrgyzstan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Som', symbol: 'с' },
    },
    Laos: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Kip', symbol: '₭' },
    },
    Latvia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Lebanon: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Pound', symbol: 'ل.ل' },
    },
    Lesotho: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Loti', symbol: 'L' },
    },
    Liberia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Liberian Dollar', symbol: '$' },
    },
    Libya: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Libyan Dinar', symbol: 'ل.د' },
    },
    Liechtenstein: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Swiss Franc', symbol: 'Fr' },
    },
    Lithuania: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Luxembourg: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Madagascar: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Malagasy Ariary', symbol: 'Ar' },
    },
    Malawi: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Malawian Kwacha', symbol: 'MK' },
    },
    Malaysia: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Malaysian Ringgit', symbol: 'RM' },
    },
    Maldives: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Maldivian Rufiyaa', symbol: 'Rf' },
    },
    Mali: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Malta: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    'Marshall Islands': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    Mauritania: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Ouguiya', symbol: 'UM' },
    },
    Mauritius: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Mauritian Rupee', symbol: '₨' },
    },
    Mexico: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Mexican Peso', symbol: '$' },
    },
    Micronesia: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    Moldova: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Moldovan Leu', symbol: 'L' },
    },
    Monaco: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Mongolia: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Tugrik', symbol: '₮' },
    },
    Montenegro: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Morocco: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Moroccan Dirham', symbol: 'د.م.' },
    },
    Mozambique: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Mozambican Metical', symbol: 'MT' },
    },
    Myanmar: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Kyat', symbol: 'K' },
    },
    Namibia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Namibian Dollar', symbol: '$' },
    },
    Nauru: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Australian Dollar', symbol: '$' },
    },
    Nepal: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Nepalese Rupee', symbol: '₨' },
    },
    Netherlands: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    'New Zealand': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'New Zealand Dollar', symbol: '$' },
    },
    Nicaragua: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Cordoba', symbol: 'C$' },
    },
    Niger: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Nigeria: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Naira', symbol: '₦' },
    },
    'North Korea': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'North Korean Won', symbol: '₩' },
    },
    'North Macedonia': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Denar', symbol: 'ден' },
    },
    Norway: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Norwegian Krone', symbol: 'kr' },
    },
    Oman: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Omani Rial', symbol: 'ر.ع.' },
    },
    Pakistan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Pakistani Rupee', symbol: '₨' },
    },
    Palau: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    Panama: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Balboa', symbol: 'B/.' },
    },
    'Papua New Guinea': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Kina', symbol: 'K' },
    },
    Paraguay: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Guarani', symbol: '₲' },
    },
    Peru: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Sol', symbol: 'S/.' },
    },
    Philippines: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Philippine Peso', symbol: '₱' },
    },
    Poland: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Zloty', symbol: 'zł' },
    },
    Portugal: {
      tipping_customary: true,
      recommended_percentage: 5,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Qatar: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Qatari Riyal', symbol: 'ر.ق' },
    },
    Romania: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Romanian Leu', symbol: 'lei' },
    },
    Russia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Russian Ruble', symbol: '₽' },
    },
    Rwanda: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Rwandan Franc', symbol: 'Fr' },
    },
    'Saint Kitts and Nevis': {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'East Caribbean Dollar', symbol: '$' },
    },
    'Saint Lucia': {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'East Caribbean Dollar', symbol: '$' },
    },
    'Saint Vincent and the Grenadines': {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'East Caribbean Dollar', symbol: '$' },
    },
    Samoa: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Tala', symbol: 'WS$' },
    },
    'San Marino': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    'Sao Tome and Principe': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dobra', symbol: 'Db' },
    },
    'Saudi Arabia': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Saudi Riyal', symbol: 'ر.س' },
    },
    Senegal: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Serbia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Serbian Dinar', symbol: 'дин' },
    },
    Seychelles: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Seychellois Rupee', symbol: '₨' },
    },
    'Sierra Leone': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Leone', symbol: 'Le' },
    },
    Singapore: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Singapore Dollar', symbol: '$' },
    },
    Slovakia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Slovenia: {
      tipping_customary: true,
      recommended_percentage: 5,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    'Solomon Islands': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Solomon Islands Dollar', symbol: '$' },
    },
    Somalia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Somali Shilling', symbol: 'Sh' },
    },
    'South Africa': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Rand', symbol: 'R' },
    },
    'South Korea': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'South Korean Won', symbol: '₩' },
    },
    'South Sudan': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'South Sudanese Pound', symbol: '£' },
    },
    Spain: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    'Sri Lanka': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Sri Lankan Rupee', symbol: '₨' },
    },
    Sudan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Sudanese Pound', symbol: '£' },
    },
    Suriname: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Surinamese Dollar', symbol: '$' },
    },
    Sweden: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Swedish Krona', symbol: 'kr' },
    },
    Switzerland: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Swiss Franc', symbol: 'Fr' },
    },
    Syria: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Syrian Pound', symbol: '£' },
    },
    Tajikistan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Somoni', symbol: 'ЅМ' },
    },
    Tanzania: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Tanzanian Shilling', symbol: 'Sh' },
    },
    Thailand: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Baht', symbol: '฿' },
    },
    'Timor-Leste': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    Togo: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'West African CFA franc', symbol: 'Fr' },
    },
    Tonga: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Paʻanga', symbol: 'T$' },
    },
    'Trinidad and Tobago': {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'Trinidad and Tobago Dollar', symbol: '$' },
    },
    Tunisia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Tunisian Dinar', symbol: 'د.ت' },
    },
    Turkey: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Turkish Lira', symbol: '₺' },
    },
    Turkmenistan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Manat', symbol: 'm' },
    },
    Tuvalu: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Australian Dollar', symbol: '$' },
    },
    Uganda: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Ugandan Shilling', symbol: 'Sh' },
    },
    Ukraine: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Hryvnia', symbol: '₴' },
    },
    'United Arab Emirates': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Dirham', symbol: 'د.إ' },
    },
    'United Kingdom': {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Pound Sterling', symbol: '£' },
    },
    'United States': {
      tipping_customary: true,
      recommended_percentage: 15,
      currency: { currency_name: 'United States Dollar', symbol: '$' },
    },
    Uruguay: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Peso', symbol: '$' },
    },
    Uzbekistan: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Som', symbol: 'с' },
    },
    Vanuatu: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Vatu', symbol: 'Vt' },
    },
    'Vatican City': {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Euro', symbol: '€' },
    },
    Venezuela: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Bolívar', symbol: 'Bs.' },
    },
    Vietnam: {
      tipping_customary: false,
      recommended_percentage: 0,
      currency: { currency_name: 'Dong', symbol: '₫' },
    },
    Yemen: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Rial', symbol: '﷼' },
    },
    Zambia: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Zambian Kwacha', symbol: 'ZK' },
    },
    Zimbabwe: {
      tipping_customary: true,
      recommended_percentage: 10,
      currency: { currency_name: 'Zimbabwean Dollar', symbol: '$' },
    },
  },
}
