import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home=lazy(()=>import("../pages/Home/Home"))
const Movies=lazy(()=>import("../pages/Movies/Movies"))
const Cast=lazy(()=>import("../components/Cast/Cast"))
const Reviews=lazy(()=>import("../components/Reviews/Reviews"))
const MovieDetails=lazy(()=>import("../components/MovieDetails/MovieDetails"))

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
   </Routes>
  );
};


