
import { createContext, useState } from 'react';

export const UserContext = createContext();
export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([{ name: 'Dmitry', email: 'test', password: '123', balance: 0, loggedIn: false, transactions: [] }]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

// const AuthContext = React.createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);

//   const login = () => {
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return React.useContext(AuthContext);
// };