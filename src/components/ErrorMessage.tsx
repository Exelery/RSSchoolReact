import React from 'react';

interface Props {
  error: boolean;
}

export default function WarningBanner({ error }: Props) {
  if (!error) {
    return null;
  }

  return <div className="warning text-red-500">Предупреждение!</div>;
}
