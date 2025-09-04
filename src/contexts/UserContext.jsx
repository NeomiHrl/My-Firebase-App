import { createContext, useContext, useEffect, useState } from 'react';
import { subscribeAuthState, signOutUser, signIn, signUp } from '../api/api';



const UserContext = createContext({ user: null, loading: true });

// Hook קצר ונוח לשימוש ברחבי האפליקציה:
export function useUser() {
  return useContext(UserContext); // מחזיר { user, loading, setUser? } כפי שסיפקת ב־Provider
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // subscribeAuthState is the wrapper exported from ../api/api
    const unsubscribe = subscribeAuthState((firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);
    });

    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);


  const logout = async () => {
      try {
        await signOutUser();
        setUser(null);
        return true;
      } catch (err) {
        console.error('Logout failed', err);
        return false;
      }
    }

  const login = async (email, password) => {
    try {
      const userObj = await signIn(email, password);
      setUser(userObj || null);
      return userObj;
    } catch (err) {
      console.error('Login failed', err);
      throw err;
    }
  };

  const register = async (email, password) => {
    try {
      const userObj = await signUp(email, password);
      setUser(userObj || null);
      return userObj;
    } catch (err) {
      console.error('Register failed', err);
      throw err;
    }
  };

  const value = {
    user,
    setUser,
    loading,
    logout
  , login,
  register
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
