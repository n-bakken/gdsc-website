import React, { useState } from 'react';
import Footer from './Footer';  
import Navbar from './Navbar';  
import eventData from './EventData';
import "./css/EventPage.css";


function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search for events" />
      <button>🔍</button>
    </div>
  );
}

function FilterTags({ setSelectedFilter }) {
  const tags = [
    { label: "All", tag: "all" },
    { label: "Meetup", tag: "meetup" },
    { label: "Leetcode Practice", tag: "leetcode" },
    { label: "Workshop", tag: "workshop" },
    { label: "Past Events", tag: "past" }
  ];

  return (
    <div className="filter-container">
      {tags.map(tagInfo => (
        <button 
          key={tagInfo.tag} 
          className="filter-tag"
          onClick={() => setSelectedFilter(tagInfo.tag)}
        >
          {tagInfo.label}
        </button>
      ))}
    </div>
  );
}

function EventCard({ title, location, date, imageSrc }) {
  return (
    <div className="event-card">
      <img src={imageSrc} alt={title} />
      <div className="event-details">
        <h3>{title}</h3>
        <div className="event-footer">
          <p className="event-location">{location}</p>
          <p className="event-date">{date}</p>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  const imageUrl = "/images/Events.jpg";
  return (
    <div className="main-content" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>Awesome Events you don't want to miss</h1>
      <p>
        Need to put some introduction and description about our activity and 
        most day-to-day events about the GSDC club 
      </p>
      <button>Join our Discord</button>
      <p>Sign up right now! Make sure you do not miss out on the event you like!</p>
    </div>
  );
}

function EventContent() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  const filteredEvents = selectedFilter !== "all" 
    ? eventData.filter(event => event.tag === selectedFilter)
    : eventData;
  
  return (
    <div className="event-content">
      <SearchBar />
      <FilterTags setSelectedFilter={setSelectedFilter} />
      <div className="events-grid">
        {filteredEvents.map(event => (
          <EventCard 
            key={event.id} 
            title={event.title} 
            location={event.location} 
            date={event.date} 
            imageSrc={event.imageSrc}
          /> 
        ))}
      </div>
    </div>
  );
}


const Event = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
      <EventContent />
      <Footer />

    </div>
  )
}

export default Event
