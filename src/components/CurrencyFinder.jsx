import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  HiSelector as SelectorIcon,
  HiCheck as CheckIcon,
} from "react-icons/hi";
import currencies from "../currencies";

const CurrencyFinder = ({ selected, handleOnChange, className }) => {
  const [query, setQuery] = useState("");

  const filteredCurrencies = currencies.filter((currency) =>
    currency.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={className}>
      <Combobox value={selected} onChange={handleOnChange}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border-2 border-gray-200 sm:text-sm">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none text-gray-900"
              displayValue={() => selected}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={selected}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg sm:text-sm z-20">
              {filteredCurrencies.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCurrencies.map((currency) => (
                  <Combobox.Option
                    key={currency}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={currency}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {currency}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default CurrencyFinder;
