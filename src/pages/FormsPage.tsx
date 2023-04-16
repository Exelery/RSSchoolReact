import React, { useState } from 'react';
import Header from '../components/Header';
import '@/styles/forms.scss';
import CardsList from '@/components/FormCardList/CardsList';
import FormComponent, { Notification } from '@/components/Form';

export function FormsPage() {
  const [notificationVisible, setNotificationVisible] = useState(false);

  let timer: ReturnType<typeof setTimeout> | undefined = undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        <FormComponent />
        <CardsList />
        {notificationVisible ? <Notification message="Card Added" /> : null}
      </div>
    </div>
  );
}
