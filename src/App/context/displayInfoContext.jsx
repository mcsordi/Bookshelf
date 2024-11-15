import P from 'prop-types';
import { createContext, useState } from 'react';

export const displayContext = createContext();
displayContext.displayName = 'displayContext';

export default function InfoDisplayContext({ children }) {
  const [displayInfo, setDisplayInfo] = useState('hidden');
  return <displayContext.Provider value={{ displayInfo, setDisplayInfo }}>{children}</displayContext.Provider>;
}
InfoDisplayContext.propTypes = {
  children: P.node,
};
