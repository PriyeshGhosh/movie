import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { BsSearch } from "react-icons/bs";
import { getMovies } from "../redux/features/movieSlice";

const Search = () => {
  const [name, setName] = useState("");
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <div>
      <div className="p-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="d-flex justify-content-between text-light  bg-light m-auto bg-danger bg-transparent border rounded-4  w-75 m-4 border-2  "
        >
          <div className="input-group  ">
            <input
              onChange={(e) => setName(e.target.value)}
              className=" d-flex px-3 fw-bold fs-4  border-0 container  form-control me-2 "
              type="text"
              value={name}
              placeholder="Search Movies"
            />
          </div>

          {/* <button className="border-0 w-25 bg-dark rounded-3 me-0 ">
            <BsSearch />
          </button> */}
        </form>
        {error && <p className="d-flex justify-content-center p-5 fs-1 text-danger fst-normal fw-bold">{error}</p>}
      </div>
    </div>
  );
};

export default Search;
