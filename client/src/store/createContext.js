import { createContext, useContext } from 'react';

const Context = createContext();

const { Provider, Consumer } = Context;

function useSelector() {
  const context = useContext(Context);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  const { state } = context;
  return state;
}

export { Context, Provider, Consumer, useSelector };
