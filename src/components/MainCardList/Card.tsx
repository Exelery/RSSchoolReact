import React from 'react';
import '@/styles/card.scss';
import { ICharacter } from '@/api/types';

export default function Card({ item, onClick }: { item: ICharacter; onClick: () => void }) {
  return (
    <div className="card hover:bg-sky-600 transition-all" onClick={onClick} role="card">
      <div className="position-relative">
        <div className="card__overlay" style={{ backgroundImage: `url(${item.image})` }} />
      </div>
      <div className="m-3">
        <div className="badge ">{item.name}</div>
        <h5 className="card-title">{item.status}</h5>
        <h6 className="card-subtitle">{item.gender} $</h6>
        <p className="card-text">{item.species}</p>
      </div>
    </div>
  );
}
