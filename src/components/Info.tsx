import React, { useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Info: React.FC = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const myTooltip = (props: any) =>
        <Tooltip id="overlay-info" {...props}>
            МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
        </Tooltip>;

    return (<>
            <OverlayTrigger key='overlayInfoTrigger' placement='bottom' overlay={myTooltip}>
                <Button ref={target} onClick={() => setShow(!show)} variant='outline-primary' className='btnCircle'>
                    {show ? '✖' : 'i'}
                </Button>
            </OverlayTrigger>
            <Overlay target={target.current} show={show} placement='bottom'>
                {(props) => (myTooltip(props))}
            </Overlay>
        </>
    );
}

export default Info;
