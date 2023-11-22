import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import { useState } from "react";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
        <div>
            <Container className="d-flex flex-column">
                <Button
                    onClick={() => setTypeVisible(true)}
                    className="mt-2"
                    variant={'outline-dark'}>Добавить тип
                </Button>
                <Button
                    onClick={() => setBrandVisible(true)}
                    className="mt-2"
                    variant={'outline-dark'}>Добавить бренд
                </Button>
                <Button
                    onClick={() => setDeviceVisible(true)}
                    className="mt-2"
                    variant={'outline-dark'}>Добавить устройство
                </Button>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            </Container>
        </div>
    );
}

export default Admin;