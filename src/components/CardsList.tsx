import React from 'react';
import CardNew from './CardNew';
import { IItem } from '../utils/types';

export default function CardsList({ items }: { items: IItem[] }) {
  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center grow">
        <h3 className=" text-4xl">Add card</h3>
      </div>
    );
  }
  return (
    <div className="card-list flex flex-wrap gap-5 my-4 col-span-4">
      {items.map((item) => (
        <CardNew item={item} key={item.id} />
      ))}
    </div>
  );
}
