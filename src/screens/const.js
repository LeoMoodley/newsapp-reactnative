export const colors = {
  bgc: '#f7f4f0',
  mainTitle: '#06a5b4',
  black: '#212121',
  white: '#fff',
  red: '#ec6c6c',
  signUpBtn: '#369b7b',
  textLightBlue: '#2ad4f2',
  textVaccinations: '#446f7e',
  buttonAdd: '#089cac',
  tableHead: '#e9ecef',
  buttonSave: '#0a9fb0',
  buttonCancel: '#fcecec',
  buttonGray: '#969895',
};

export const baseURL = 'https://ourcare.life';

export const vacs = [
  { id: 1, value: 'null', name: 'Please select an option' },
  { id: 2, value: 'Moderna', name: 'Moderna' },
  { id: 3, value: 'Pfizer', name: 'Pfizer' },
  { id: 4, value: 'Astrazeneca', name: 'Astrazeneca' },
  { id: 5, value: 'Johnson and Johnson', name: 'Johnson and Johnson' },
  { id: 6, value: 'Novavax ', name: 'Novavax ' },
];

export const timeZone = [
  {
    id: 999,
    name: 'Please choose your timezone',
    value: 'Please choose your timezone',
  },
  {
    id: 0,
    name: 'Pacific/Midway',
    value: '(GMT-11:00) Midway Island, Samoa',
  },
  {
    id: 1,
    name: 'Pacific/Pago_Pago',
    value: '(GMT-11:00) Pago Pago',
  },
  {
    id: 2,
    name: 'Pacific/Honolulu',
    value: '(GMT-10:00) Hawaii',
  },
  {
    id: 3,
    name: 'America/Anchorage',
    value: '(GMT-8:00) Alaska',
  },
  {
    id: 4,
    name: 'America/Juneau',
    value: '(GMT-8:00) Juneau',
  },
  {
    id: 5,
    name: 'America/Vancouver',
    value: '(GMT-7:00) Vancouver',
  },
  {
    id: 6,
    name: 'America/Los_Angeles',
    value: '(GMT-7:00) Pacific Time (US and Canada)',
  },
  {
    id: 7,
    name: 'America/Tijuana',
    value: '(GMT-7:00) Tijuana',
  },
  {
    id: 8,
    name: 'America/Phoenix',
    value: '(GMT-7:00) Arizona',
  },
  {
    id: 9,
    name: 'America/Edmonton',
    value: '(GMT-6:00) Edmonton',
  },
  {
    id: 10,
    name: 'America/Denver',
    value: '(GMT-6:00) Mountain Time (US and Canada)',
  },
  {
    id: 11,
    name: 'America/Mazatlan',
    value: '(GMT-6:00) Mazatlan',
  },
  {
    id: 12,
    name: 'America/Regina',
    value: '(GMT-6:00) Saskatchewan',
  },
  {
    id: 13,
    name: 'America/Guatemala',
    value: '(GMT-6:00) Guatemala',
  },
  {
    id: 14,
    name: 'America/El_Salvador',
    value: '(GMT-6:00) El Salvador',
  },
  {
    id: 15,
    name: 'America/Managua',
    value: '(GMT-6:00) Managua',
  },
  {
    id: 16,
    name: 'America/Costa_Rica',
    value: '(GMT-6:00) Costa Rica',
  },
  {
    id: 17,
    name: 'America/Tegucigalpa',
    value: '(GMT-6:00) Tegucigalpa',
  },
  {
    id: 18,
    name: 'America/Chihuahua',
    value: '(GMT-6:00) Chihuahua',
  },
  {
    id: 19,
    name: 'America/Winnipeg',
    value: '(GMT-5:00) Winnipeg',
  },
  {
    id: 20,
    name: 'America/Chicago',
    value: '(GMT-5:00) Central Time (US and Canada)',
  },
  {
    id: 21,
    name: 'America/Mexico_City',
    value: '(GMT-5:00) Mexico City',
  },
  {
    id: 22,
    name: 'America/Panama',
    value: '(GMT-5:00) Panama',
  },
  {
    id: 23,
    name: 'America/Bogota',
    value: '(GMT-5:00) Bogota',
  },
  {
    id: 24,
    name: 'America/Lima',
    value: '(GMT-5:00) Lima',
  },
  {
    id: 25,
    name: 'America/Monterrey',
    value: '(GMT-5:00) Monterrey',
  },
  {
    id: 26,
    name: 'America/Montreal',
    value: '(GMT-4:00) Montreal',
  },
  {
    id: 27,
    name: 'America/New_York',
    value: '(GMT-4:00) Eastern Time (US and Canada)',
  },
  {
    id: 28,
    name: 'America/Indianapolis',
    value: '(GMT-4:00) Indiana (East)',
  },
  {
    id: 29,
    name: 'America/Puerto_Rico',
    value: '(GMT-4:00) Puerto Rico',
  },
  {
    id: 30,
    name: 'America/Caracas',
    value: '(GMT-4:00) Caracas',
  },
  {
    id: 31,
    name: 'America/Santiago',
    value: '(GMT-4:00) Santiago',
  },
  {
    id: 32,
    name: 'America/La_Paz',
    value: '(GMT-4:00) La Paz',
  },
  {
    id: 33,
    name: 'America/Guyana',
    value: '(GMT-4:00) Guyana',
  },
  {
    id: 34,
    name: 'America/Halifax',
    value: '(GMT-3:00) Halifax',
  },
  {
    id: 35,
    name: 'America/Montevideo',
    value: '(GMT-3:00) Montevideo',
  },
  {
    id: 36,
    name: 'America/Araguaina',
    value: '(GMT-3:00) Recife',
  },
  {
    id: 37,
    name: 'America/Argentina/Buenos_Aires',
    value: '(GMT-3:00) Buenos Aires, Georgetown',
  },
  {
    id: 38,
    name: 'America/Sao_Paulo',
    value: '(GMT-3:00) Sao Paulo',
  },
  {
    id: 39,
    name: 'Canada/Atlantic',
    value: '(GMT-3:00) Atlantic Time (Canada)',
  },
  {
    id: 40,
    name: 'America/St_Johns',
    value: '(GMT-2:30) Newfoundland and Labrador',
  },
  {
    id: 41,
    name: 'America/Godthab',
    value: '(GMT-2:00) Greenland',
  },
  {
    id: 42,
    name: 'Atlantic/Cape_Verde',
    value: '(GMT-1:00) Cape Verde Islands',
  },
  {
    id: 43,
    name: 'Atlantic/Azores',
    value: '(GMT+0:00) Azores',
  },
  {
    id: 44,
    name: 'UTC',
    value: '(GMT+0:00) Universal Time UTC',
  },
  {
    id: 45,
    name: 'Etc/Greenwich',
    value: '(GMT+0:00) Greenwich Mean Time',
  },
  {
    id: 46,
    name: 'Atlantic/Reykjavik',
    value: '(GMT+0:00) Reykjavik',
  },
  {
    id: 47,
    name: 'Africa/Nouakchott',
    value: '(GMT+0:00) Nouakchott',
  },
  {
    id: 48,
    name: 'Europe/Dublin',
    value: '(GMT+1:00) Dublin',
  },
  {
    id: 49,
    name: 'Europe/London',
    value: '(GMT+1:00) London',
  },
  {
    id: 50,
    name: 'Europe/Lisbon',
    value: '(GMT+1:00) Lisbon',
  },
  {
    id: 51,
    name: 'Africa/Casablanca',
    value: '(GMT+1:00) Casablanca',
  },
  {
    id: 52,
    name: 'Africa/Bangui',
    value: '(GMT+1:00) West Central Africa',
  },
  {
    id: 53,
    name: 'Africa/Algiers',
    value: '(GMT+1:00) Algiers',
  },
  {
    id: 54,
    name: 'Africa/Tunis',
    value: '(GMT+1:00) Tunis',
  },
  {
    id: 55,
    name: 'Europe/Belgrade',
    value: '(GMT+2:00) Belgrade, Bratislava, Ljubljana',
  },
  {
    id: 56,
    name: 'CET',
    value: '(GMT+2:00) Sarajevo, Skopje, Zagreb',
  },
  {
    id: 57,
    name: 'Europe/Oslo',
    value: '(GMT+2:00) Oslo',
  },
  {
    id: 58,
    name: 'Europe/Copenhagen',
    value: '(GMT+2:00) Copenhagen',
  },
  {
    id: 59,
    name: 'Europe/Brussels',
    value: '(GMT+2:00) Brussels',
  },
  {
    id: 60,
    name: 'Europe/Berlin',
    value: '(GMT+2:00) Amsterdam, Berlin, Rome, Stockholm, Vienna',
  },
  {
    id: 61,
    name: 'Europe/Amsterdam',
    value: '(GMT+2:00) Amsterdam',
  },
  {
    id: 62,
    name: 'Europe/Rome',
    value: '(GMT+2:00) Rome',
  },
  {
    id: 63,
    name: 'Europe/Stockholm',
    value: '(GMT+2:00) Stockholm',
  },
  {
    id: 64,
    name: 'Europe/Vienna',
    value: '(GMT+2:00) Vienna',
  },
  {
    id: 65,
    name: 'Europe/Luxembourg',
    value: '(GMT+2:00) Luxembourg',
  },
  {
    id: 66,
    name: 'Europe/Paris',
    value: '(GMT+2:00) Paris',
  },
  {
    id: 67,
    name: 'Europe/Zurich',
    value: '(GMT+2:00) Zurich',
  },
  {
    id: 68,
    name: 'Europe/Madrid',
    value: '(GMT+2:00) Madrid',
  },
  {
    id: 69,
    name: 'Africa/Harare',
    value: '(GMT+2:00) Harare, Pretoria',
  },
  {
    id: 70,
    name: 'Europe/Warsaw',
    value: '(GMT+2:00) Warsaw',
  },
  {
    id: 71,
    name: 'Europe/Prague',
    value: '(GMT+2:00) Prague Bratislava',
  },
  {
    id: 72,
    name: 'Europe/Budapest',
    value: '(GMT+2:00) Budapest',
  },
  {
    id: 73,
    name: 'Africa/Tripoli',
    value: '(GMT+2:00) Tripoli',
  },
  {
    id: 74,
    name: 'Africa/Cairo',
    value: '(GMT+2:00) Cairo',
  },
  {
    id: 75,
    name: 'Africa/Johannesburg',
    value: '(GMT+2:00) Johannesburg',
  },
  {
    id: 76,
    name: 'Africa/Khartoum',
    value: '(GMT+2:00) Khartoum',
  },
  {
    id: 77,
    name: 'Europe/Helsinki',
    value: '(GMT+3:00) Helsinki',
  },
  {
    id: 78,
    name: 'Africa/Nairobi',
    value: '(GMT+3:00) Nairobi',
  },
  {
    id: 79,
    name: 'Europe/Sofia',
    value: '(GMT+3:00) Sofia',
  },
  {
    id: 80,
    name: 'Europe/Istanbul',
    value: '(GMT+3:00) Istanbul',
  },
  {
    id: 81,
    name: 'Europe/Athens',
    value: '(GMT+3:00) Athens',
  },
  {
    id: 82,
    name: 'Europe/Bucharest',
    value: '(GMT+3:00) Bucharest',
  },
  {
    id: 83,
    name: 'Asia/Nicosia',
    value: '(GMT+3:00) Nicosia',
  },
  {
    id: 84,
    name: 'Asia/Beirut',
    value: '(GMT+3:00) Beirut',
  },
  {
    id: 85,
    name: 'Asia/Damascus',
    value: '(GMT+3:00) Damascus',
  },
  {
    id: 86,
    name: 'Asia/Jerusalem',
    value: '(GMT+3:00) Jerusalem',
  },
  {
    id: 87,
    name: 'Asia/Amman',
    value: '(GMT+3:00) Amman',
  },
  {
    id: 88,
    name: 'Europe/Moscow',
    value: '(GMT+3:00) Moscow',
  },
  {
    id: 89,
    name: 'Asia/Baghdad',
    value: '(GMT+3:00) Baghdad',
  },
  {
    id: 90,
    name: 'Asia/Kuwait',
    value: '(GMT+3:00) Kuwait',
  },
  {
    id: 91,
    name: 'Asia/Riyadh',
    value: '(GMT+3:00) Riyadh',
  },
  {
    id: 92,
    name: 'Asia/Bahrain',
    value: '(GMT+3:00) Bahrain',
  },
  {
    id: 93,
    name: 'Asia/Qatar',
    value: '(GMT+3:00) Qatar',
  },
  {
    id: 94,
    name: 'Asia/Aden',
    value: '(GMT+3:00) Aden',
  },
  {
    id: 95,
    name: 'Africa/Djibouti',
    value: '(GMT+3:00) Djibouti',
  },
  {
    id: 96,
    name: 'Africa/Mogadishu',
    value: '(GMT+3:00) Mogadishu',
  },
  {
    id: 97,
    name: 'Europe/Kiev',
    value: '(GMT+3:00) Kiev',
  },
  {
    id: 98,
    name: 'Europe/Minsk',
    value: '(GMT+3:00) Minsk',
  },
  {
    id: 99,
    name: 'Asia/Dubai',
    value: '(GMT+4:00) Dubai',
  },
  {
    id: 100,
    name: 'Asia/Muscat',
    value: '(GMT+4:00) Muscat',
  },
  {
    id: 101,
    name: 'Asia/Baku',
    value: '(GMT+4:00) Baku, Tbilisi, Yerevan',
  },
  {
    id: 102,
    name: 'Asia/Tehran',
    value: '(GMT+4:30) Tehran',
  },
  {
    id: 103,
    name: 'Asia/Kabul',
    value: '(GMT+4:30) Kabul',
  },
  {
    id: 104,
    name: 'Asia/Yekaterinburg',
    value: '(GMT+5:00) Yekaterinburg',
  },
  {
    id: 105,
    name: 'Asia/Tashkent',
    value: '(GMT+5:00) Islamabad, Karachi, Tashkent',
  },
  {
    id: 106,
    name: 'Asia/Calcutta',
    value: '(GMT+5:30) India',
  },
  {
    id: 107,
    name: 'Asia/Kolkata',
    value: '(GMT+5:30) Mumbai, Kolkata, New Delhi',
  },
  {
    id: 108,
    name: 'Asia/Kathmandu',
    value: '(GMT+5:45) Kathmandu',
  },
  {
    id: 109,
    name: 'Asia/Almaty',
    value: '(GMT+6:00) Almaty',
  },
  {
    id: 110,
    name: 'Asia/Dacca',
    value: '(GMT+6:00) Dacca',
  },
  {
    id: 111,
    name: 'Asia/Dhaka',
    value: '(GMT+6:00) Astana, Dhaka',
  },
  {
    id: 112,
    name: 'Asia/Rangoon',
    value: '(GMT+6:30) Rangoon',
  },
  {
    id: 113,
    name: 'Asia/Novosibirsk',
    value: '(GMT+7:00) Novosibirsk',
  },
  {
    id: 114,
    name: 'Asia/Krasnoyarsk',
    value: '(GMT+7:00) Krasnoyarsk',
  },
  {
    id: 115,
    name: 'Asia/Bangkok',
    value: '(GMT+7:00) Bangkok',
  },
  {
    id: 116,
    name: 'Asia/Saigon',
    value: '(GMT+7:00) Vietnam',
  },
  {
    id: 117,
    name: 'Asia/Jakarta',
    value: '(GMT+7:00) Jakarta',
  },
  {
    id: 118,
    name: 'Asia/Irkutsk',
    value: '(GMT+8:00) Irkutsk, Ulaanbaatar',
  },
  {
    id: 119,
    name: 'Asia/Shanghai',
    value: '(GMT+8:00) Beijing, Shanghai',
  },
  {
    id: 120,
    name: 'Asia/Hong_Kong',
    value: '(GMT+8:00) Hong Kong SAR',
  },
  {
    id: 121,
    name: 'Asia/Taipei',
    value: '(GMT+8:00) Taipei',
  },
  {
    id: 122,
    name: 'Asia/Kuala_Lumpur',
    value: '(GMT+8:00) Kuala Lumpur',
  },
  {
    id: 123,
    name: 'Asia/Singapore',
    value: '(GMT+8:00) Singapore',
  },
  {
    id: 124,
    name: 'Australia/Perth',
    value: '(GMT+8:00) Perth',
  },
  {
    id: 125,
    name: 'Asia/Yakutsk',
    value: '(GMT+9:00) Yakutsk',
  },
  {
    id: 126,
    name: 'Asia/Seoul',
    value: '(GMT+9:00) Seoul',
  },
  {
    id: 127,
    name: 'Asia/Tokyo',
    value: '(GMT+9:00) Osaka, Sapporo, Tokyo',
  },
  {
    id: 128,
    name: 'Australia/Darwin',
    value: '(GMT+9:30) Darwin',
  },
  {
    id: 129,
    name: 'Australia/Adelaide',
    value: '(GMT+9:30) Adelaide',
  },
  {
    id: 130,
    name: 'Asia/Vladivostok',
    value: '(GMT+10:00) Vladivostok',
  },
  {
    id: 131,
    name: 'Pacific/Port_Moresby',
    value: '(GMT+10:00) Guam, Port Moresby',
  },
  {
    id: 132,
    name: 'Australia/Brisbane',
    value: '(GMT+10:00) Brisbane',
  },
  {
    id: 133,
    name: 'Australia/Sydney',
    value: '(GMT+10:00) Canberra, Melbourne, Sydney',
  },
  {
    id: 134,
    name: 'Australia/Hobart',
    value: '(GMT+10:00) Hobart',
  },
  {
    id: 135,
    name: 'Asia/Magadan',
    value: '(GMT+11:00) Magadan',
  },
  {
    id: 136,
    name: 'SST',
    value: '(GMT+11:00) Solomon Islands',
  },
  {
    id: 137,
    name: 'Pacific/Noumea',
    value: '(GMT+11:00) New Caledonia',
  },
  {
    id: 138,
    name: 'Asia/Kamchatka',
    value: '(GMT+12:00) Kamchatka',
  },
  {
    id: 139,
    name: 'Pacific/Fiji',
    value: '(GMT+12:00) Fiji Islands, Marshall Islands',
  },
  {
    id: 140,
    name: 'Pacific/Auckland',
    value: '(GMT+12:00) Auckland, Wellington',
  },
  {
    id: 141,
    name: 'Pacific/Apia',
    value: '(GMT+13:00)Independent State of Samoa',
  },
];
