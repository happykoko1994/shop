import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userApi";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";


const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }


    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="mt-3"
                        placeholder="Введите email"
                    />
                    <Form.Control
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className="mt-3"
                        placeholder="Введите пароль"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin
                            ? <Col sm={10}><div>Нет аккаунта?<Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link></div></Col>
                            : <div></div>}
                        <Col sm={2}>
                            <Button
                                onClick={click}
                                className="align-self-end"
                                variant={"outline-success"}>{isLogin ? "Войти" : 'Регистрация'}
                            </Button>
                        </Col>

                    </Row>
                </Form>
            </Card>
        </Container>
    );
})

export default Auth;