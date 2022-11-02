import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import { getMovie } from "../redux/features/movieSlice";
import { ClassNames } from "@emotion/react";

const Movies = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const router = useRouter();
  const id = router.query.movies;
  // we can acess the ids from the link like this (here movies is dynamic router so it stores the id & we dont need to use the react dom )
  console.log(id);
  // const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);
  return (
    <div className={ClassNames.section}>
      <div className="p-5 h-100"><img src={movie.Poster}   alt={movie.Title} /></div>
      <div className="position-absolute top-0 start-50 translate-middle-x p-5  justify-content-end">
        <Typography className="d-flex justify-content-evenly text-uppercase fw-bold" align="top" variant="h3" gutterBottom component="h2">
          {movie.Title}
        </Typography>
        <Typography align="left" variant="h5" gutterBottom component="h4">
          Year: {movie.Year}
        </Typography>
        <Typography className="lh-base" align="left" variant="h4" gutterBottom component="p">
          Plot: {movie.Plot}
        </Typography>
        <Typography align="left" variant="h6" gutterBottom component="h6">
          Director: {movie.Director}
        </Typography>
        <Button variant="contained" onClick={() => router.back()}>
          GO Back
        </Button>
      </div>
    </div>
  );
};

export default Movies;
