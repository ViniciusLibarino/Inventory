import React, { createContext, ReactNode, SetStateAction, useContext, useState } from "react";
import { Item } from "../components/Item";

interface SelectProviderProps {
  children: ReactNode;
}

interface Item {
  id: number
  title: string
  image?: string
  price: number
  amount: number
}

interface ISelectContextData {
  item: Item
  setItem: (prevState: Item) => Item
}

const SelectContext = createContext({} as ISelectContextData)

function SelectProvider({ children }: SelectProviderProps) {
  const [item, setItem] = useState({} as Item)

  return (
    <SelectContext.Provider value={{ item, setItem }}>
      {children}
    </SelectContext.Provider>

  )
}

function useSelect() {
  const context = useContext(SelectContext)

  return context;
}

export { SelectProvider, useSelect }