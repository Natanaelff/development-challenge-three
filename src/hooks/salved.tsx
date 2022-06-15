import React, { createContext, ReactNode, useContext, useState } from 'react';

type SalesProviderProps = {
  children: ReactNode;
};

type ISalvedContextData = {
  textValue: string;
  setTextValue: (value: React.SetStateAction<string>) => void;
  unValue: string
  setUnValue: (value: React.SetStateAction<string>) => void;
}

const SalvedContext = createContext({} as ISalvedContextData);

function SalvedProvider({ children }: SalesProviderProps) {
  const [textValue, setTextValue] = useState('');
  const [unValue, setUnValue] = useState('');

  return (
    <SalvedContext.Provider
      value={{
        textValue,
        setTextValue,
        unValue,
        setUnValue
      }}
    >
      {children}
    </SalvedContext.Provider>
  )
}

function useSalved() {
  const context = useContext(SalvedContext);

  return context;
}

export { SalvedProvider, useSalved };