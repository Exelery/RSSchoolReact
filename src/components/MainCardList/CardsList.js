import React, { useState } from 'react';
import Card from './Card';
import Modal from '../Modal/Modal';
import Loader from '../Loader';
import { useGetCharsQuery } from '@/store/rtkApi';
import { useAppSelector } from '../../store/hook';
export default function CardsList() {
    const search = useAppSelector((state) => state.search.value);
    const { data, isLoading, isError } = useGetCharsQuery(search);
    const [modalVibible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState(0);
    function showModal(id) {
        setModalId(id);
        setModalVisible(true);
    }
    if (isLoading) {
        return React.createElement(Loader, null);
    }
    if (!data || isError) {
        return (React.createElement("div", { className: "flex justify-center items-center grow" },
            React.createElement("h3", { className: " text-4xl" }, "No cards")));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "card-list mx-10 flex flex-wrap gap-5 my-4 col-span-4" }, data.results.map((item) => (React.createElement(Card, { item: item, key: item.id, onClick: () => showModal(item.id) })))),
        modalVibible ? React.createElement(Modal, { id: modalId, onClose: () => setModalVisible(false) }) : null));
}
