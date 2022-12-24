import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const SharedLayout = () => {
  return (
       <div>
          <nav>
          <Link to="/home">Home</Link>
          <Link to="/movies">Movies</Link>
          </nav>
          <Outlet/>
       </div>
        
  );
};