import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  date: Date;
  description: string;
}

interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: []
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents(state, action: PayloadAction<Event[]>) {
      state.events = action.payload;
    },
    addEvent(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
    },
    editEvent(state, action: PayloadAction<{ index: number; newDescription: string }>) {
      const { index, newDescription } = action.payload;
      state.events[index].description = newDescription;
    },
    deleteEvent(state, action: PayloadAction<number>) {
      state.events = state.events.filter((_, i) => i !== action.payload);
    }
  }
});

export const { setEvents, addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
