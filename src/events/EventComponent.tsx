import React from "react";

const EventComponent: React.FC = () => {
  return (
    <div>
      <input type='text' onChange={(e) => console.log(e)} />
    </div>
  );
};

export default EventComponent;
