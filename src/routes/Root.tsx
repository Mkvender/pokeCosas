import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "../components/Loading/Loading";
import { PATHS } from "./paths.ts";

const Home = lazy(() => import("../pages/Home/Home.tsx"));
const Pokedex = lazy(() => import("../pages/Pokedex/Pokedex.tsx"));
const Pokemon = lazy(() => import("../pages/Pokemon/Pokemon.tsx"));

const Root: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.POKEDEX} element={<Pokedex />} />
        <Route path={`${PATHS.POKEMON}/:id`} element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default Root;
