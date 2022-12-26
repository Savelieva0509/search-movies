import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<SharedLayout/>}>
        
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          {/* <Route path="reviews" element={<Reviews/>}/> */}
        </Route>
      </Route>
   </Routes>
  );
};


