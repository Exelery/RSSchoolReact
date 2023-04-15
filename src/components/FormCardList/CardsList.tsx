import React from 'react';
import Card from './Card';
import { useAppSelector } from '../../store/hook';

export default function CardsList() {
  // { items }: { items: IItem[] }
  const items = useAppSelector((state) => state.form.items);
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
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}
