
export const getCountryCoordinates = (country: string): [number, number] => {
  const coordinates: { [key: string]: [number, number] } = {
    'Brazil': [-47.9292, -15.7801],
    'India': [77.1025, 20.5937],
    'Nigeria': [8.6753, 9.0820],
    'Vietnam': [108.2772, 14.0583],
    'Mexico': [-102.5528, 23.6345],
    'Argentina': [-63.6167, -38.4161],
    'Chile': [-71.5430, -35.6751],
    'Colombia': [-74.2973, 4.5709],
    'Bangladesh': [90.3563, 23.6850],
    'Sri Lanka': [80.7718, 7.8731],
    'Nepal': [84.1240, 28.3949],
    'Ghana': [-1.0232, 7.9465],
    'Kenya': [37.9062, -0.0236],
    'South Africa': [22.9375, -30.5595],
    'Uganda': [32.2903, 1.3733],
    'Thailand': [100.9925, 15.8700],
    'Cambodia': [104.9910, 12.5657],
    'Laos': [102.4955, 19.8563],
    'Myanmar': [95.9560, 21.9162],
    'Guatemala': [-90.2308, 15.7835],
    'Honduras': [-87.2068, 15.2000],
    'El Salvador': [-88.8965, 13.7942],
    'Costa Rica': [-83.7534, 9.7489],
    'Panama': [-80.7821, 8.5380],
  };
  return coordinates[country] || [0, 0];
};

export const formatCurrency = (amount: number, currency: string) => {
  const formatters: { [key: string]: Intl.NumberFormat } = {
    USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    EUR: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
    GBP: new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }),
  };
  return formatters[currency]?.format(amount) || `${currency} ${amount.toLocaleString()}`;
};
