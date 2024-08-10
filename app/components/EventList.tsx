


interface EventListProps {
  events: { date: Date; description: string }[];
  selectedDate: Date;
  onEditEvent: (index: number, newDescription: string) => void;
  onDeleteEvent: (index: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, selectedDate, onEditEvent, onDeleteEvent }) => {
  const filteredEvents = events.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div>
      {filteredEvents.map((event, index) => (
        <div key={index}>
          <span>{event.description}</span>
          <button onClick={() => onEditEvent(index, prompt('Edit event:', event.description) || '')}>Edit</button>
          <button onClick={() => onDeleteEvent(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
