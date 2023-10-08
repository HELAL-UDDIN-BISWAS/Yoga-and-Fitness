import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoute = ({ children }) => {
    const { user,loding } = useContext(AuthContext)
    const location=useLocation()
    console.log(location)
if(loding){
    return <div className="mx-auto h-96 items-center justify-center flex"><span className="loading loading-spinner loading-lg"></span></div>
}

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PriveteRoute;