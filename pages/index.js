import Head from "next/head";
import Movies from "./movies";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "@auth0/auth0-react";
import { getMovies, setMovies } from "../redux/features/movieSlice";

export default function Home() {
  const { user, isLoadingcc, error } = useUser();

  const [name, setName] = useState();
  // const search = useSelector(state => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  const {
    movieList: { Error: errors },
  } = useSelector((state) => ({ ...state.movie }));

  return (
    <div>
      <div>
        {user ? (
          <>
          <p>{user.name}</p>
            <a href="/api/auth/logout"> Logout</a>
          </>
        ) : (
          <a href="/api/auth/logout"> Login</a>
        )}
      </div>

      <Head>
        <h1 className="px-3 text-center"> Movie app</h1>
      </Head>

      <>
        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex justify-content-between text-light  bg-light m-auto bg-danger bg-transparent border rounded-4  w-75 m-4 border-2 "
          >
            <div className="input-group ">
              <input
                onChange={(e) => setName(e.target.value)}
                className=" d-flex px-3 fw-bold fs-4  border-0 container-fluid form-control me-2 "
                type="text"
                placeholder="Search Movies"
              />

              {errors && (
                <p className=" fs-3 text-center text-dark">{errors}</p>
              )}
            </div>
            <button className="border-0 w-25 bg-dark rounded-3 me-0 ">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="d-flex justify-content-center">
          {/* {movieList?.Search?.map((item, index) => (
          <div >

          </div>
        ))} */}
        </div>
      </>
    </div>
  );
}
