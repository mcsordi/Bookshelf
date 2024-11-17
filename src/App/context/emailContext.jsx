import P from 'prop-types';
import { createContext, useState } from 'react';

export const emailAdress = createContext();
emailAdress.displayName = 'email';

export default function EmailContext({ children }) {
  const [adress, setAdress] = useState();
  return <emailAdress.Provider value={{ adress, setAdress }}>{children}</emailAdress.Provider>;
}
EmailContext.propTypes = {
  children: P.node,
};
