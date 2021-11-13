import React, { useEffect, useState } from 'react';
import { eventsService } from '../services/eventsService';
import { EventPreview } from '../components/EventPreview';

export function Events({onToggle}) {

    const [events, setEvents] = useState(null);

    useEffect(() => {
        let isMount = true;
        if (isMount) {
            getEvents();
        }
        return () => {
            isMount = false;
        }
    }, [])

    const getEvents = async () => {
        const dateObj = new Date();
        const filterObj = {
            day: dateObj.getUTCDate(),
            month: dateObj.getUTCMonth() + 1
        }
        const data = await eventsService.query(filterObj);
        setEvents(data.data);
        console.log(data.data);
    }

    if (!events) return <div>Loading...</div>
    const { Events, Births, Deaths } = events
    return (
        <div onClick={onToggle} className="container flex-col">
            <section id='event' className="type-container flex-col">
                <h2>EVENTS</h2>
                <div className="cards-container"> 
                    {
                        Events.map((event, idx) => {
                            return <EventPreview key={idx} event={event} eventType='event' />
                        })
                    }
                </div>
            </section>
            <section id='birth' className="type-container flex-col">
                <h2>Births</h2>
                <div className="cards-container">
                    {
                        Births.map((event, idx) => {
                            return <EventPreview key={idx} event={event} eventType='birth' />
                        })
                    }
                </div>
            </section>
            <section id='death' className="type-container flex-col">
                <h2>Deaths</h2>
                <div className="cards-container">
                    {
                        Deaths.map((event, idx) => {
                            return <EventPreview key={idx} event={event} eventType='death' />
                        })
                    }
                </div>
            </section>
            <a className="backBtn" href="#top">Back To Top</a>
        </div>
    )
}
