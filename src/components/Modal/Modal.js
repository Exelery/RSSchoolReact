import React from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './ModalContent';
import Loader from '@/components/Loader';
import { useGetCharByIdQuery } from '../../store/rtkApi';
const Modal = ({ id, onClose }) => {
    const { data, isLoading } = useGetCharByIdQuery(id);
    function clickHandler(e) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
    return ReactDOM.createPortal(React.createElement("div", { className: "fixed top-0 left-0 z-[1055] h-full w-full\r\n       overflow-y-auto flex items-center justify-center overflow-x-hidden\r\n       utline-none bg-black bg-opacity-60", onClick: clickHandler }, !data || isLoading ? React.createElement(Loader, null) : React.createElement(ModalContent, { character: data, onClose: onClose })), document.body);
};
export default Modal;
