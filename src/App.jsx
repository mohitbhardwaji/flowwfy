import React from "react";
import Home from "./pages/Home";
import './App.css'
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <AppRoutes />
      </Provider>
    </div>
  );
};

export default App;
