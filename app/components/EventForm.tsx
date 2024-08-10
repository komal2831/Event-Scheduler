'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../store/eventsSlice';
import { AppDispatch } from '../store/store';

interface EventFormProps {
  selectedDate: Date;
}

const EventForm: React.FC<EventFormProps> = ({ selectedDate }) => {
  const [description, setDescription] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addEvent({ date: selectedDate, description }));
      setDescription('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
    >
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event description"
        style={{
          width: '220px',
          height: '20px',
          padding: '8px',
          resize: 'none',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Event
      </button>
    </form>
  );
};

export default EventForm;
