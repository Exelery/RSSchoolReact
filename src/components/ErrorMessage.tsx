import React from 'react';
import { ErrorProps } from '../utils/types';

export default function WarningBanner({ error, children }: ErrorProps) {
  if (!error) {
    return null;
  }

  return <div className="warning text-red-500">{children ? children : 'Warning!'}</div>;
}
