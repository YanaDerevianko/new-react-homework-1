export const CurrencyConverter = ({amount, exchangeRate}) => {
  return <div className="component-wrapper component-wrapper-3">
    <h2 className="component-name">Component 'CurrencyConverter'</h2>

    <p>You want to exchange {amount} euros for hryvnias at the exchange rate of {exchangeRate} hryvnias for 1 euro</p>
    <p>You will receive: {amount*exchangeRate} hryvnias</p>
    
  </div>;
};
