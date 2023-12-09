import "./App.css";
import Header from "./components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./Store/Store";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export const appLayOut = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

export default App;
