"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = () => {
const [query, setQuery] = useState('');
const [fixtures, setFixtures] = useState([]);
const [selectedFixture, setSelectedFixture] = useState(null);

useEffect(() => {
const fetchData = async () => {
    if (query.length < 2) return;
    try {
    const response = await axios.get(`/api/search?q=${query}`);
    setFixtures(response.data);
    } catch (err) {
    console.error(err);
    }
};
    const debounce = setTimeout(fetchData, 300);
    return () => clearTimeout(debounce);
}, [query]);

return (
<div>
    <input
    type="text"
    placeholder="Search teams..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    />
    <ul style={{ 
    listStyle: 'none', 
    padding: 0,
    marginTop: '20px',
    border: '1px solid #eee',
    borderRadius: '8px'
    }}>
    {fixtures.map((fixture) => (
        <li key={fixture._id} 
        onClick={() => setSelectedFixture(fixture)}
        style={{
        padding: '12px',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        backgroundColor: selectedFixture?._id === fixture._id ? '#f5f5f5' : 'white',
        transition: 'background-color 0.2s'
        }}
    >
        {fixture.homeTeam} vs {fixture.awayTeam}
        </li>
    ))}
    </ul>

    {selectedFixture && (
    <div>
        <h3>Fixture Details</h3>
        <p><strong>{selectedFixture.team1}</strong> vs <strong>{selectedFixture.team2}</strong></p>
        <p>Date: {selectedFixture.date}</p>
        <p>Venue: {selectedFixture.venue}</p>
    </div>
    )}
</div>
);
};

export default SearchForm;