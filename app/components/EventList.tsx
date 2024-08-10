import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { editEvent, deleteEvent } from '../store/eventsSlice';
import './EventTable.css';

interface EventListProps {
  selectedDate: Date;
}

const EventList: React.FC<EventListProps> = ({ selectedDate }) => {
  const events = useSelector((state: RootState) => state.events.events);
  const dispatch: AppDispatch = useDispatch();

  const filteredEvents = events.filter(
    (event) => event.date.toDateString() === selectedDate.toDateString()
  );

  const handleEditEvent = (index: number) => {
    const newDescription = prompt('Edit event:', filteredEvents[index].description);
    if (newDescription !== null && newDescription.trim() !== '') {
      dispatch(editEvent({ index, newDescription }));
    }
  };

  const handleDeleteEvent = (index: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      dispatch(deleteEvent(index));
    }
  };

  return (
    <div className="event-table-container">
      <div className="table-header">
        <h2>Event List</h2>
      </div>
      <div className="table-scroll">
        {filteredEvents.length === 0 ? (
          <p className="no-events">No events found</p>
        ) : (
          <table className="event-table">
            <thead>
              <tr>
                <th className="description-header">Description</th>
                <th className="actions-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, index) => (
                <tr key={index}>
                  <td className="description-cell">{event.description}</td>
                  <td className="actions-cell">
                    <button
                      className="edit-button"
                      onClick={() => handleEditEvent(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteEvent(index)}
                    >
                      Delete
                    </button>
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
