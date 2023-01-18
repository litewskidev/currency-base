export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  // TEST
  if(typeof PLN === 'string'){
    return NaN
  };
  if(typeof PLN === 'undefined'){
    return NaN
  };
  if(typeof PLN !== 'string' && typeof PLN !== 'number'){
    return 'Error'
  };
  if(PLN < 0){
    return '$0.00'
  };

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
};
