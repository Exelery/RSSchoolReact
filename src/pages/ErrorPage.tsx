import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>This is the error page</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
