import React,{useEffect,useState} from 'react';
import parse from 'html-react-parser'
import { Card, CardGroup, CardImg, Button } from 'react-bootstrap';

export function EventPreview({ event,eventType }) {
   
    const eventIng = 'https://qph.fs.quoracdn.net/main-qimg-0d8a610d935f8b61bf2b7711707ded9b';
    const deathImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/The_death.svg/1927px-The_death.svg.png';
    const birthImg = 'https://toppng.com/uploads/preview/cartoon-baby-birth-11548528926gh4vsgnisw.png';
    return (
            <Card className="mycard">
                <span className="eventYear">{event.year}</span>
                <Card.Img variant="top" src={eventType==='event'? eventIng: eventType==='birth' ? birthImg : deathImg}  />
                <Card.Body style={{backgroundColor:"rgb(48, 48, 48)", color:"white"}}>
                    <Card.Text className="myCardTxt">
                       {parse(event.no_year_html)}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}
