import React from 'react';

function EventView({ className, title, date }: EventViewProps) {
  return (
    <div className={"tile rounded text-white p-2" + (" " + className ?? "")}>
      <div className="title w-full text-center leading-tight text-lg">
        {title}
      </div>

      <div className="text-sm">
        Состоится {date}
      </div>
    </div>
  );
}

export interface EventViewProps {
  className?: string,
  title: string,
  date: string,
}

export default EventView;