import React, { useState } from 'react';
import Header from '../components/Header';
import '@/styles/forms.scss';
import { IItem } from '@/utils/types';
import CardsList from '@/components/CardsList';
import FormComponent from '@/components/form/FormComponent';

export default function FormsPage() {
  const [items, setItems] = useState<IItem[]>([]);
  const [id, setId] = useState(0);
  function addCard(item: IItem) {
    setItems((prev) => [...prev, { ...item, id: id }]);
    setId((prev) => ++prev);
  }

  return (
    <div className="w-full">
      <Header title="Forms" />
      <div className="Forms flex md:flex-wrap m-8 gap-8">
        <FormComponent addCard={addCard} />
        <CardsList items={items} />
      </div>
    </div>
  );
}
