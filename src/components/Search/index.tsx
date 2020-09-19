import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../store/actions/alertActions";
import { getWeather, setLoading } from "../../store/actions/weatherActions";

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!city.trim()) {
      return dispatch(setAlert("Input cannot be empty !"));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={onSubmitHandler}>
            <input
              style={{ maxWidth: 300 }}
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter city name"
              value={city}
              onChange={onChangeHandler}
            />
            <button
              style={{ maxWidth: 300, margin: "0 auto" }}
              className="button is-primary is-fullwidth"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
