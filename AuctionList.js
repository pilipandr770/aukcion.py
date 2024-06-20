import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuctionList = () => {
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        axios.get('/api/auctions/')
            .then(response => setAuctions(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {auctions.map(auction => (
                <div key={auction.id}>{auction.name}</div>
            ))}
        </div>
    );
};

export default AuctionList;