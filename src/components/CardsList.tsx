import React from 'react';
import CardNew from './CardNew';
import { IItem } from '../utils/types';

export default function CardsList({ items }: { items: IItem[] }) {
  return (
    <div className="card-list flex flex-wrap gap-5 mx-10 my-4">
      {items.map((item) => (
        <CardNew item={item} key={item.id} />
      ))}
    </div>
  );
}
