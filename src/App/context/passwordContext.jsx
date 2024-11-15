import P from 'prop-types';
import { createContext, useState } from 'react';

export const password = createContext();
password.displayName = 'password';

export default function PasswordContext({ children }) {
  const [message, setMessage] = useState(false);
  return <password.Provider value={{ message, setMessage }}>{children}</password.Provider>;
}
PasswordContext.propTypes = {
  children: P.node,
};
