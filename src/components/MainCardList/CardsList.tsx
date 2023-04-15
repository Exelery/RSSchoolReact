import React, { useState } from 'react';
import Card from './Card';
import Modal from '../Modal/Modal';
import { Loader } from '../Loader';
import { useGetCharsQuery } from '@/store/rtkApi';
import { useAppSelector } from '../../store/hook';

export default function CardsList() {
  const search = useAppSelector((state) => state.search.value);
  const { data, isLoading, isError } = useGetCharsQuery(search);
  const [modalVibible, setModalVisible] = useState(false);
  const [modalId, setModalId] = useState(0);
  function showModal(id: number) {
    setModalId(id);
    setModalVisible(true);
  }
  if (isLoading) {
    return <Loader />;
  }

  if (!data || isError) {
    return (
      <div className="flex justify-center items-center grow">
        <h3 className=" text-4xl">No cards</h3>
      </div>
    );
  }

  return (
    <>
      <div className="card-list mx-10 flex flex-wrap gap-5 my-4 col-span-4">
        {data.results.map((item) => (
          <Card item={item} key={item.id} onClick={() => showModal(item.id)} />
        ))}
      </div>
      {modalVibible ? <Modal id={modalId} onClose={() => setModalVisible(false)} /> : null}
    </>
  );
}
