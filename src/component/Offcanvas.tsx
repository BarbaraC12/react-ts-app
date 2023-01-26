import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from 'react-dom';

interface IOffCanvasType {
    name: string,
    type: string, // 'start', 'end', 'top', 'bottom'
    content: Container
};
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example(props: IOffCanvasType) {
  return (
    <>
      {[props.type].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={props.name} content={props.content} />
      ))}
    </>
  );
}

export default Example;