import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout } from "./components/Layouts";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((router, index) => {
            const Page = router.component;
            let Layout = DefaultLayout;
            if(router.layout === null) {
              Layout = Fragment;
            }
            return <Route
              key={index}
              path={router.path}
              element={<Layout><Page /></Layout>}
            />
          })}

          {privateRoutes.map((router, index) => {
            const Page = router.component;
            let Layout = DefaultLayout;
            return <Route
              key={index}
              path={router.path}
              element={<Layout><Page /></Layout>}
            />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
