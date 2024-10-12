import React from 'react';
import './Client.css';
import airbnd from '../../../images/airbnb.png';
import google from '../../../images/google.png';
import netflix from '../../../images/netflix.png';
import slack from '../../../images/slack.png';
import uber from '../../../images/uber.png';

const clientData = [
    {
        name: 'Airbnd',
        img: airbnd,
    },
    {
        name: 'Google',
        img: google,
    },
    {
        name: 'Netflix',
        img: netflix,
    },
    {
        name: 'Slack',
        img: slack,
    },
    {
        name: 'Uber',
        img: uber,
    },
]

const Client = () => {
    return (
        <div className='container client-container' >
            <div className="row row-cols-1 d-flex align-items-center row-cols-md-5 g-0">
                {clientData.map((client, index) =>
                    <div className="col" key={index}>
                        <div className="card border-0  h-100">
                            <img src={client.img} style={{width: '100px', margin: '0 auto'}} className="card-img-top img-fluid" alt={client.name} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Client;