import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AuctionDetail = () => {
    const { id } = useParams();
    const [auction, setAuction] = useState(null);

    useEffect(() => {
        axios.get(`/api/auctions/${id}/`)
            .then(response => setAuction(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!auction) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{auction.title}</h1>
            <p>{auction.description}</p>
            <p>Current Price: {auction.current_price}</p>
            <p>End Time: {new Date(auction.end_time).toLocaleString()}</p>
        </div>
    );
};

export default AuctionDetail;