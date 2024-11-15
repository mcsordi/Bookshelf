import P from 'prop-types';
import { createContext, useState } from 'react';

export const userContext = createContext();
userContext.displayName = 'userContext';

export default function InfoUserContext({ children }) {
  const [display, setDisplay] = useState('hidden');
  return <userContext.Provider value={{ display, setDisplay }}>{children}</userContext.Provider>;
}
InfoUserContext.propTypes = {
  children: P.node,
};
