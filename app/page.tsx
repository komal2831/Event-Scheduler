// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import CalendarComponent from './components/Calendar';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import { loadEvents, saveEvents } from './utils/storage';

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | Date[] | null>(new Date());
  const [events, setEvents] = useState<{ date: Date; description: string }[]>([]);

  useEffect(() => {
    setEvents(loadEvents());
  }, []);

  useEffect(() => {
    saveEvents(events);
  }, [events]);

   // Function to add any event
  const addEvent = (event: { date: Date; description: string }) => {
    setEvents([...events, event]);
  };

   // Function to edit any event
  const editEvent = (index: number, newDescription: string) => {
    const updatedEvents = events.map((event, i) =>
      i === index ? { ...event, description: newDescription } : event
    );
    setEvents(updatedEvents);
  };

  // Function to delete any event
  const deleteEvent = (index: number) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  // method to change Date to schdule new event 
  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div>
      {/* Loaded All components */}
      <CalendarComponent selectedDate={selectedDate as Date} onDateChange={handleDateChange} />
      <EventForm selectedDate={selectedDate as Date} onAddEvent={addEvent} />
      <EventList
        events={events}
        selectedDate={selectedDate as Date}
        onEditEvent={editEvent}
        onDeleteEvent={deleteEvent}
      />
    </div>
  );
};

export default Page;
