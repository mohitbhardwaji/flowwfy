import React from "react";
import Home from "./pages/Home";
import './App.css'
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <AppRoutes />
      </Provider>
    </div>
  );
};

export default App;
