import { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from 'react-bootstrap'
import { observer } from "mobx-react-lite";

const Navbar = observer(() => {
    const { user } = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)

    }

    return (
        <NavBar bg="dark" data-bs-theme="dark">
            <Container>
                <Link style={{ color: "white" }} to={SHOP_ROUTE} >SHOPLOGO</Link>

                {user.isAuth
                    ?
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button
                            className="ms-2"
                            variant={'outline-light'}
                            onClick={() => logOut()}>Выйти</Button>
                    </Nav>

                    :
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }


            </Container >
        </NavBar >

    );
})

export default Navbar;