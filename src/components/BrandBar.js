import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import ListGroup from 'react-bootstrap/ListGroup';
import { Card, Container, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Container className="d-flex flex-wrap">
            {device.brands.map(brand =>
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className="p-3 "
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : "light"}
                >
                    {brand.name}
                </Card>
            )}
        </Container>
    );
})

export default BrandBar;