

import './EventTable.css';
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
    // Event List form
    <div className="event-table-container">
    <div className="table-header">
      <h2>Event List</h2>
    </div>
    <div className="table-scroll">
      {filteredEvents.length === 0 ? (
        <p className="no-events">No events found</p>
      ) : (
        <table className="event-table">
          {/* Table header  */}
          <thead>
            <tr>
              <th className="description-header">Description</th>
              <th className="actions-header">Actions</th>
            </tr>
          </thead>

          {/* table Events data */}
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr key={index}>
                <td className="description-cell">{event.description}</td>
                <td className="actions-cell">
                  <button className="edit-button" onClick={() => onEditEvent(index, prompt('Edit event:', event.description) || '')}>Edit</button>
                  <button className="delete-button" onClick={() => onDeleteEvent(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
  );
};

export default EventList;
