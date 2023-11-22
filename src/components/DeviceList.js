import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Container } from "react-bootstrap";
import DeviceItem from "./DeviceItem";


const DeviceList = observer(() => {
    const { device } = useContext(Context)

    return (
        <Container className="d-flex flex-wrap" >
            {device.devices.map(device =>
                <DeviceItem
                    key={device.id}
                    device={device}
                />
            )}
        </Container>
    );
})

export default DeviceList;