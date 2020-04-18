import { createContext, useContext } from 'react';

const Context = createContext();

const { Provider, Consumer } = Context;

function useSelector(selectFn) {
  const context = useContext(Context);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  const { state } = context;

  if (selectFn && typeof selectFn === 'function') {
    return selectFn(state);
  }

  return state;
}

export { Context, Provider, Consumer, useSelector };
