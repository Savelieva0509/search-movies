import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
       <div>
          <nav>
          <Link to="/" end="true">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          </nav>
           <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
       </div>
        
  );
};