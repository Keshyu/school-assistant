import React from 'react';
import EventView from '../containers/EventView';

function Events() {
  return (
    <div className="p-3">
      <div className="capitalize mb-1 text-xl">
        Школьные мероприятия
      </div>

      <hr className="mb-4" />

      <EventView title="Концерт на День Святого Валентина" date="13 февраля" />

      <div className="h-2" />

      <EventView title="Смотр песни и строя" date="29 февраля" />

      <div className="h-2" />

      <EventView title={"Линейка \"Триумф\""} date="25 мая" />
    </div>
  );
}

export default Events;