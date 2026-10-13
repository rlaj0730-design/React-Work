import React from 'react'
import data from '../json/singer.json'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card } from 'react-bootstrap';

const Ex03 = () => {

  console.log(data);
  
  return (
    <div>
        <h1>목록</h1>
        <div style={{display : "flex"}}>
            
            {/* 아래 틀에 map를 활용해서 모든 가수의 정보가 나오게하시오 */}

            { data.result.map( (e, index) => 
                <div key={index} style={{display : "flex"}}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img src={e.imgSrc} variant="top" height="300px" />
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            {e.content}
                        </Card.Text>
                        <a href={e.SNS} target="_blank">
                            <Button variant="primary">인스타그램</Button>
                        </a>
                    </Card.Body>
                    </Card>
                </div>
            )}
        </div>

        <h1>1994년생 보다 나이가 많거나 같은 연예인</h1>
        <div style={{ display : "flex"}}>
            { data.result.filter( e => e.birthYear < 1995).map( (e, index) => 
                <div key={index} style={{display : "flex"}}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img src={e.imgSrc} variant="top" height="300px" />
                    <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                            {e.content}
                        </Card.Text>
                        <a href={e.SNS} target="_blank">
                            <Button variant="primary">인스타그램</Button>
                        </a>
                    </Card.Body>
                    </Card>
                </div>
            )}
        </div>
        
    </div>
  )
}

export default Ex03