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
    <div>
      <CalendarComponent selectedDate={selectedDate} onDateChange={handleDateChange} />
      <EventForm selectedDate={selectedDate} />
      <EventList selectedDate={selectedDate} />
    </div>
  );
};

export default Page;
