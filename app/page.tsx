'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarComponent from './components/Calendar';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import { setEvents } from './store/eventsSlice';
import { RootState, AppDispatch } from './store/store';
import { loadEvents, saveEvents } from './utils/storage';

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const dispatch: AppDispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events.events);

  useEffect(() => {
    const savedEvents = loadEvents();
    dispatch(setEvents(savedEvents));
  }, [dispatch]);

  useEffect(() => {
    saveEvents(events);
  }, [events]);

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else {
      setSelectedDate(new Date()); // Set to current date or handle as needed
    }
  };

  return (
      <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%', 
      padding: '1rem', 
      boxSizing: 'border-box' 
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flex: '1', 
        marginBottom: '1rem', 
        flexWrap: 'wrap' 
      }}>
        <div style={{ 
          flex: '1', 
          marginRight: '1rem', 
          minWidth: '300px', 
          boxSizing: 'border-box'
        }}>
          <CalendarComponent selectedDate={selectedDate} onDateChange={handleDateChange} />
          <EventForm selectedDate={selectedDate} />
        </div>
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          boxSizing: 'border-box'
        }}>
          <EventList selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default Page;
