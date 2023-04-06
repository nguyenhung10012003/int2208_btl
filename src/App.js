import {Fragment} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {publicRoutes, privateRoutes} from "./routes";
import {DefaultLayout} from "./components/Layouts";
import {useAuth} from "./hooks/AuthContext";

function App() {
    const {isLoggedIn} = useAuth();
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((router, index) => {
                        const Page = router.component;
                        let Layout = DefaultLayout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={<Layout><Page/></Layout>}
                            />
                        );
                    })}
                    {privateRoutes.map((router, index) => {
                        const Page = router.component;
                        let Layout = DefaultLayout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={isLoggedIn ? (
                                    <Layout><Page/></Layout>
                                ) : (
                                    <Navigate to="/login"/>
                                )}
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
