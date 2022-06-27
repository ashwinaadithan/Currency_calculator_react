const CurrencyInput = ({ value, handleOnChange }) => {
  return (
    <div className="relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm">$</span>
      </div>
      <input
        type="text"
        name="price"
        id="price"
        value={value}
        onChange={handleOnChange}
        className="p-2 block w-full pl-7 pr-12 sm:text-sm border-2 border-gray-200 rounded-md focus:outline-none"
        placeholder="0.00"
      />
    </div>
  );
};

export default CurrencyInput;
