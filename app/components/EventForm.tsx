'use client'; 

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
// To Add new Event 
  return (
    <form
    onSubmit={handleSubmit}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px', // Adjust space between elements as needed
      width: '100%',
      maxWidth: '450px',
      margin: '0 auto',
    }}
  >

    {/* To write description for any new event  */}
    <textarea
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Event description"
      style={{
        width: '220px',
        height: '20px',
        padding: '8px',
        resize: 'none',
        marginTop:'10px',
        marginBottom:'10px'
      }}
    />
    <button
      type="submit"
      style={{
        marginTop:'10px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
         marginBottom:'10px'
      }}
    >
      Add Event
    </button>
  </form>
  

  );
};

export default EventForm;
