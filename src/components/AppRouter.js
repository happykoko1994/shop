import { Route, Routes } from "react-router-dom";
import { authRoutes } from "../routes";
import { publicRoutes } from "../routes";
import Shop from '../pages/Shop'
import { useContext } from "react";
import { Context } from "..";

const AppRouter = () => {
    const { user } = useContext(Context)

    return (

        <Routes>
            work
            {/* <Route path='/about' element={<About />} /> */}
            {user.isAuth && authRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />)
            }
            {publicRoutes.map(({ path, element }) =>
                <Route key={path} path={path} element={element} exact />)
            }
            <Route path='*' element={<Shop />} />
        </Routes>
    );
}

export default AppRouter;