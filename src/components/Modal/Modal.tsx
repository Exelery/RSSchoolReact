import React, { useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './ModalContent';
import { Loader } from '@/components/Loader';
import { ICharacter } from '@/api/types';
import { getCharacterById } from '@/api/api';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

const Modal: React.FC<ModalProps> = ({ id, isOpen, onClose }) => {
  const [character, setCharacter] = useState<ICharacter>();

  useLayoutEffect(() => {
    const fetchItem = async () => {
      const answer = await getCharacterById(id);
      if (answer) setCharacter(answer);
    };
    if (isOpen) {
      fetchItem();
    }
  }, [id, isOpen]);

  function clickHandler(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 z-[1055] h-full w-full
       overflow-y-auto flex items-center justify-center overflow-x-hidden
       utline-none bg-black bg-opacity-60"
      onClick={clickHandler}
    >
      {!character ? <Loader /> : <ModalContent character={character} onClose={onClose} />}
    </div>,
    document.body
  );
};

export default Modal;
