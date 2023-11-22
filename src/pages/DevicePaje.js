import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from '../assets/star.png'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevices } from "../http/deviceAPI";

const DevicePage = () => {
    // const device = { id: 1, name: 'Samsung', price: 250000, raiting: 5, img: "https://ww2.movistar.cl/blog/wp-content/uploads/2022/03/Hero-iPhone-12-Pro-Max.jpg" }
    // const description = [
    //     { id: 1, title: 'Оперативная память', description: '5 ГБ' },
    //     { id: 2, title: 'Камера', description: '5 МП' },
    //     { id: 3, title: 'Процессор', description: '5 пентиум' },
    //     { id: 4, title: 'Аккамулятор', description: '5 Мпа' },
    // ]

    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()

    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, []);

    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Image width={300} height={300} src={'http://localhost:5000/' + device.img} />
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div
                                style={{
                                    background: `url(${star}) no-repeat center center`,
                                    width: 240,
                                    height: 240,
                                    backgroundSize: 'cover',
                                    fontSize: 64
                                }}
                                className="d-flex align-items-center justify-content-center">
                                <div>{device.raiting}</div>
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}>
                            <h3>От: {device.price}руб.</h3>
                            <Button variant={'outline-dark'}>Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h2>Характеристики</h2>
                    {device.info.map((info, index) =>
                        <Row
                            key={info.id}
                            style={{ background: index % 2 === 0 ? 'lightgray' : "transparent", padding: 10 }}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default DevicePage;