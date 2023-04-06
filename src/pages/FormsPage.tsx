import React, { useState } from 'react';
import Header from '../components/Header';
import '@/styles/forms.scss';
import { IItem } from '@/utils/types';
import CardsList from '@/components/CardsList';
import FormComponent from '@/components/form/FormComponent';
import Notification from '../components/form/Notification';

export default function FormsPage() {
  const [items, setItems] = useState<IItem[]>([]);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [id, setId] = useState(0);
  function addCard(item: IItem) {
    setItems((prev) => [...prev, { ...item, id: id }]);
    setId((prev) => ++prev);
    showNotification();
  }
  let timer: ReturnType<typeof setTimeout> | undefined = undefined;
  function showNotification() {
    if (timer) clearTimeout(timer);
    setNotificationVisible(true);
    timer = setTimeout(() => {
      setNotificationVisible(false);
    }, 3000);
  }

  return (
    <div className="w-full">
      <Header title="Forms" />
      <div className="Forms flex md:flex-wrap m-8 gap-8">
        <FormComponent addCard={addCard} />
        <CardsList items={items} />
        {notificationVisible ? <Notification message="Card Added" /> : null}
      </div>
    </div>
  );
}
