import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './ModalContent';
import { Loader } from '@/components/Loader';

import { useGetCharByIdQuery } from '../../store/rtkApi';

interface ModalProps {
  onClose: () => void;
  id: number;
}

const Modal: React.FC<ModalProps> = ({ id, onClose }) => {
  const { data, isLoading, isError } = useGetCharByIdQuery(id);
  // console.log(data);
  // const [trigger, { data, isLoading, isError, error }, lastPromiseInfo] = useLazyGetCharByIdQuery();

  function clickHandler(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  console.log(data);
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 z-[1055] h-full w-full
       overflow-y-auto flex items-center justify-center overflow-x-hidden
       utline-none bg-black bg-opacity-60"
      onClick={clickHandler}
    >
      {!data || isLoading ? <Loader /> : <ModalContent character={data} onClose={onClose} />}
    </div>,
    document.body
  );
};

export default Modal;
