import React, {useState, useContext} from 'react';
const AuthContext = React.createContext({
    name: '',
    setName: () => {}
});

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [name, setName] = useState('');
  return (
    <AuthContext.Provider
      value={{name, setName}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export {useAuth, AuthProvider}