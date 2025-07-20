import React, { useState, useEffect } from "react";
import "./AddEvent.css";

 export const AddEvent = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setEvents((prevEvents) =>
        prevEvents.filter((event) => new Date(`${event.date} ${event.time}`) > now)
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", time: "", location: "", description: "" });
    }
  };

  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setNewEvent(events[index]);
    handleDelete(index);
  };

  return (
    <div className="event-manager-container">
      <h1 className="event-title">Event Manager</h1>
      <p className="event-subtitle">Organize and manage your upcoming events</p>

      <div className="event-form">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="time"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <button onClick={handleAddEvent}>+ Add New Event</button>
      </div>

      <div className="event-cards">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-card-content">
              <h2 className="event-title">{event.title}</h2>
              <p>📅 {new Date(event.date).toDateString()}</p>
              <p>⏰ {event.time}</p>
              <p>📍 {event.location}</p>
              <p>📝 {event.description}</p>
              <div className="event-actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button className="danger" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


