import React, { useState } from 'react';
import Card from './Card';
import { ICharacter } from '@/api/types';
import Modal from '../Modal/Modal';
import { Loader } from '../Loader';

interface Props {
  items: ICharacter[];
  loaderVisible: boolean;
}

export default function CardsList({ items, loaderVisible }: Props) {
  // console.log('items', items);
  const [modalVibible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(0);
  function showModal(id: number) {
    setModalId(id);
    setModalVisible(true);
  }
  if (loaderVisible) {
    return <Loader />;
  }

  if (items.length === 0) {
    return (
      <div className="flex justify-center items-center grow">
        <h3 className=" text-4xl">No cards</h3>
      </div>
    );
  }

  return (
    <>
      <div className="card-list mx-10 flex flex-wrap gap-5 my-4 col-span-4">
        {items.map((item) => (
          <Card item={item} key={item.id} onClick={() => showModal(item.id)} />
        ))}
      </div>
      <Modal id={modalId} isOpen={modalVibible} onClose={() => setModalVisible(false)} />
    </>
  );
}
