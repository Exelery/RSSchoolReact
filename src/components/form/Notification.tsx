import React from 'react';

export default function Notification(props: { message: string }) {
  const { message } = props;

  return (
    <div className="notification absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl">
      {message}
    </div>
  );
}
