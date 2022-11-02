
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0";
import Search from "../components/search";
import { getMovies, setMovies } from "../redux/features/movieSlice";
import { fetchMovies } from "./../redux/api";
import MovieList from '../components/moviesList';


export default function Home() {
  const { user, isLoading, error } = useUser();
  console.log(fetchMovies);

  // const search = useSelector(state => state.search);

  return (
    <div>
      {user ? (
        <div>
          <div>
            <a
              className="d-flex justify-content-end pe-4 fs-4 text-decoration-none "
              href="/api/auth/logout"
            >
              Logout
            </a>
            <div className="">Welcome {user.name}!</div>
          </div>

          <h1 className="px-3 text-center fs-3 text-bg-primary container rounded p-2 "> Movies</h1>
          <Search />
          <MovieList/>
          
        </div>
      ) : (
        <a href="/api/auth/login">Login</a>
      )}

      <>
        <div className="d-flex justify-content-around "></div>
      </>
    </div>
  );
}
