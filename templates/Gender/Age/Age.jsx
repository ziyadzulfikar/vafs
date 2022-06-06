import React, { useState } from 'react'
import { Button, ButtonGroup, Col, Container, Row, ToggleButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Age() {
  const [radioValue, setRadioValue] = useState('1');
  const [ageValue, setageValue] = useState('11');

    const radios = [
        { name: 'Young', value: '1' },
        { name: 'Middle Aged', value: '2' },
        { name: 'Aged', value: '3' }
    ];
    
    const ages = [
        { name: '18-25', value: '11' },
        { name: '25-30', value: '12' },
        { name: '30-40', value: '13' },
        { name: '40-50', value: '14' },
        { name: '50-60', value: '15' },
        { name: '60+', value: '16' },
    ];
  return (
    <div className='mid'>
      <h1 className='textMain'>Age</h1>
        <div className='ageAllBtn'>
            {/* <Row>
                <Col md='3'><h4><Badge bg="light" text='dark'>Young</Badge></h4></Col>
                <Col md='4'><h4><Badge bg="light" text='dark'>Middle Age</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>Aged</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>18-25</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>25-30</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>30-40</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>40-50</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>50-60</Badge></h4></Col>
                <Col md='3'><h4><Badge bg="light" text='dark'>60+</Badge></h4></Col>
                <Col md='5'><Form.Control  placeholder='Other Type' /></Col>
            </Row> */}

                <ButtonGroup>
                  <Container>
                    <Row>
                    {radios.map((radio, idx) => (
                        <Col md='4' className='my-2'>
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
                    </Row>
                    </Container>                    
                </ButtonGroup>
               
               <hr style={{background:'white'}} />
                <ButtonGroup>
                    <Row>
                    {ages.map((age, idx) => (
                        <Col md='6' className='my-2'>
                            <ToggleButton
                                className='ethinicityBtn'
                                key={idx}
                                id={`age-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-light' : 'outline-light'}
                                name="age"
                                value={age.value}
                                checked={ageValue === age.value}
                                onChange={(e) => setageValue(e.currentTarget.value)}
                                >
                                {age.name}
                            </ToggleButton>
                        </Col>
                    ))}
                    </Row>
                </ButtonGroup>
          

            {/* <Radio.Group size="solid">
              <Radio.Button className='ageBtn' value="a">Young</Radio.Button>
              <Radio.Button className='ageBtn' value="b">Middle Aged</Radio.Button>
              <Radio.Button className='ageBtn' value="c">Aged</Radio.Button>
            </Radio.Group>
            <Radio.Group size="small" style={{ marginTop: 50, left: '100px' }}>
              <Radio.Button className='ageBtn2' value="a">18-25</Radio.Button>
              <Radio.Button className='ageBtn2' value="b" style={{marginLeft: 12}}>25-30</Radio.Button>
              <Radio.Button className='ageBtn2' value="c" style={{marginLeft: 12}}>30-40</Radio.Button>
              <Radio.Button className='ageBtn2' value="d" style={{marginLeft: 12}}>40-50</Radio.Button>
              <Radio.Button className='ageBtn2' value="d" style={{marginLeft: 12}}>50-60</Radio.Button>
              <Radio.Button className='ageBtn2' value="d" style={{marginLeft: 12}}>60+</Radio.Button>
            </Radio.Group> */}
            <Link to='/Ethinicity'><Button variant="success" className='my-2'>Next</Button></Link>
            <Link to='/Ethinicity'><Button variant="danger" className="mx-2">Skip</Button></Link>
            
        </div>
    </div>
  )
}

export default Age