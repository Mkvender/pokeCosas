// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "./types";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonsByAmountNumber: builder.query<Pokemon, number>({
      query: (number) => `pokemon/?offset=0&limit=${number}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonsByAmountNumberQuery } =
  pokemonApi;
