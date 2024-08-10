// app/components/EventForm.tsx
'use client';  // Add this directive at the top

import { useState } from 'react';

interface EventFormProps {
  selectedDate: Date;
  onAddEvent: (event: { date: Date; description: string }) => void;
}

const EventForm: React.FC<EventFormProps> = ({ selectedDate, onAddEvent }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description) {
      onAddEvent({ date: selectedDate, description });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event description"
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
