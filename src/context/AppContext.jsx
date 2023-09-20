import { View, Text } from 'react-native'
import React, { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

const ContextProvider = ({ children }) => {
  const [options, setOptions] = useState(['Option 1 *', 'Option 2 *',]);

  const pollOptions = useMemo(() => {
    return { options, setOptions };
  }, [options])

  return (
    <AppContext.Provider value={pollOptions}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider