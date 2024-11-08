import P from 'prop-types';
import { createContext, useState } from 'react';
export const search = createContext();
search.displayName = 'searchContext';

function SearchContext({ children }) {
  const [value, setValue] = useState(false);
  return <search.Provider value={{ value, setValue }}>{children}</search.Provider>;
}
SearchContext.propTypes = {
  children: P.node,
};
export default SearchContext;
