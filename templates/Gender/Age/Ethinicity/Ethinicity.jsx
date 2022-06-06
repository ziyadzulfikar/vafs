import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Form, Row, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Ethinicity() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Asian', value: '1' },
        { name: 'American', value: '2' },
        { name: 'Chinese', value: '3' },
        { name: 'Bengal', value: '4' },
        { name: 'Korean', value: '5' },
        { name: 'Kerala', value: '6' },
    ];
    return (
        <div className='mid'>
            <h1 className='textMain'>Ethinicity</h1>
            <div style={{width: '15rem'}}>
                {/* <Row>
                    <Col md='6'><h4><Badge bg="light" text='dark'>Asian</Badge></h4></Col>
                    <Col md='6'><h4><Badge bg="light" text='dark'>American</Badge></h4></Col>
                    <Col md='6'><h4><Badge bg="light" text='dark'>Chinese</Badge></h4></Col>
                    <Col md='6'><h4><Badge bg="light" text='dark'>Bengal</Badge></h4></Col>
                    <Col md='6'><h4><Badge bg="light" text='dark'>Korean</Badge></h4></Col>
                    <Col md='6'><h4><Badge bg="light" text='dark'>Kerala</Badge></h4></Col>
                </Row> */}

                <ButtonGroup>
                    <Row>
                    {radios.map((radio, idx) => (
                        <Col md='6' className='my-2'>
                            <ToggleButton
                                className='ethinicityBtn'
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-light' : 'outline-light'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                {radio.name}
                            </ToggleButton>
                        </Col>
                    ))}
                        <Col md='12'><Form.Control name='other' placeholder='Other Type' /></Col>
                    </Row>
                </ButtonGroup>

                <Link to='/Describe'><Button variant="success">Next</Button></Link>
                <Link to='/Describe'><Button variant="danger" className="mx-2 my-2">Skip</Button></Link>
                
            </div>
        </div>
    )
}

export default Ethinicity