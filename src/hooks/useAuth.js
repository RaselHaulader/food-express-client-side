import  { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
// use auth provide all data of use useFirebase hook via context
const useAuth = () => {
    const allAuth = useContext(AuthContext);
    return allAuth
};

export default useAuth;