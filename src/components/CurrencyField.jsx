import CurrencyFinder from "./CurrencyFinder";
import CurrencyInput from "./CurrencyInput";

const CurrencyField = ({
  value,
  handleInputChange,
  selected,
  handleCurrencyChange,
  className,
}) => {
  return (
    <div
      className={
        "relative flex flex-row rounded-md shadow-sm p-2 items-center justify-around max-w-fit " +
        className
      }
    >
      <CurrencyInput value={value} handleOnChange={handleInputChange} />
      <CurrencyFinder
        selected={selected}
        handleOnChange={handleCurrencyChange}
        className="ml-4"
      />
    </div>
  );
};

export default CurrencyField;
