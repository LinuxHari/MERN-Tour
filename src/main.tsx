import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import "./assets/css/vendors.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App.tsx";
import {store} from "./redux/store.ts";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);
