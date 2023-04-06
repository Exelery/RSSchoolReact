import React from 'react';
import '../styles/card.scss';
import { IItem } from '../utils/types';

type IProps = {
  item: IItem;
};

export default function newCard({ item }: IProps) {
  return (
    <div className="bg-white border-2 border-blue-500 rounded-lg overflow-hidden flex flex-col w-80 h-80 flex-wrap relative">
      <div className="px-4 py-2">
        <img src={item.image} className={item.image ? 'w-72 object-contain h-auto max-h-40' : ''} />
        <div className="font-bold text-lg mb-2">{item.title}</div>
        <p className="text-gray-700">{item.gender}</p>
        <div className="flex gap-2 justify-center">
          {item.category.map((el, index) => (
            <div className="border-blue-500 bg-blue-500 text-white rounded-full px-3" key={index}>
              {el}
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-base">{item.rating}</p>
        <p className="text-gray-700 absolute bottom-2 left-2">{item.date}</p>
      </div>
    </div>
  );
}
