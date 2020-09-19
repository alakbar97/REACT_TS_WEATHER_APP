import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import RootStore, { RootState } from "./store";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Weather from "./components/Weather";

import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const errorMsg = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="App">
      <Search title="Enter City Name and Press Search Button" />
      {loading ? (
        <h2 className="is-size-3 py-2">Loading ...</h2>
      ) : (
        weatherData && <Weather data={weatherData} />
      )}
      {alertMsg && (
        <Alert message={alertMsg} onClose={() => dispatch(setAlert(""))} />
      )}
      {errorMsg && (
        <Alert message={errorMsg} onClose={() => dispatch(setError())} />
      )}
    </div>
  );
};

export default App;
