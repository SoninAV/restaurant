import { Navigate } from 'react-router-dom';

const Private = ({Component}) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    return isAuthenticated ? <Component /> : <Navigate to="/login" />
}

export default Private;