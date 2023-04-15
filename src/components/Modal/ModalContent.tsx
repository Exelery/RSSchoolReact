import React from 'react';
import { ICharacter } from '@/api/types';
import { ReactComponent as CrossLogo } from '@/assets/cross.svg';

type Props = {
  character: ICharacter;
  onClose: () => void;
};

export default function ModalContent({ character, onClose }: Props) {
  console.log('test');
  if (character) {
    return (
      <div role="modalContent" className="w-1/2 h 1/2 bg-white relative">
        <CrossLogo className="absolute w-5 h-5 right-5 top-5 cursor-pointer" onClick={onClose} />
        <div className="p-4 rounded-md shadow-md bg-white">
          <img
            src={character.image}
            alt={character.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold text-center mt-4">{character.name}</h2>
          <div className="text-lg font-medium text-center mt-2">
            {character.species} - {character.gender}
          </div>
          <hr className="my-4" />
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">Status: </span>
              {character.status}
            </div>
            <div>
              <span className="font-bold">Type: </span>
              {character.type || 'unknown'}
            </div>
            <div>
              <span className="font-bold">Origin: </span>
              <a href={character.origin.url}>{character.origin.name}</a>
            </div>
            <div>
              <span className="font-bold">Last known location: </span>
              <a href={character.location.url}>{character.location.name}</a>
            </div>
            <div>
              <span className="font-bold">Episodes: </span>
              {character.episode.length}
            </div>
            <div>
              <span className="font-bold">Created: </span>
              {new Date(character.created).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}
