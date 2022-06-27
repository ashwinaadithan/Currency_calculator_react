import { useEffect, useState } from "react";
import CurrencyField from "./components/CurrencyField";

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      const data = await (
        await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      ).json();

      setRates(data.rates);
    };

    if (fromCurrency) {
      fetchRates();
    }
  }, [fromCurrency]);

  useEffect(() => {
    if (fromAmount && rates[toCurrency]) {
      setToAmount((fromAmount * rates[toCurrency]).toFixed(2) || 0);
    }
  }, [rates, fromAmount, toCurrency]);

  return (
    <div className="relative flex flex-col rounded-md shadow-sm p-2 mt-16 items-center justify-around">
      <h2 className="text-3xl font-bold text-gray-500 mb-6">
        CURRENCY CONVERTER
      </h2>

      {fromAmount && toAmount && fromCurrency && toCurrency ? (
        <div>
          <span className="text-gray-700 text-center">1 {fromCurrency} =</span>{" "}
          <br />
          <span className="text-gray-500 text-center text-5xl">
            {rates[toCurrency]} {toCurrency}
          </span>
        </div>
      ) : null}

      <CurrencyField
        value={fromAmount}
        handleInputChange={(e) => setFromAmount(e.target.value)}
        selected={fromCurrency}
        handleCurrencyChange={(curr) => setFromCurrency(curr)}
      />
      <CurrencyField
        value={toAmount}
        handleInputChange={(e) => setToAmount(e.target.value)}
        selected={toCurrency}
        handleCurrencyChange={(curr) => setToCurrency(curr)}
        className="mt-2"
      />
    </div>
  );
}

export default App;
