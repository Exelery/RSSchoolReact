import React from 'react';
import { ReactComponent as CrossLogo } from '@/assets/cross.svg';
export default function ModalContent({ character, onClose }) {
    if (character) {
        return (React.createElement("div", { role: "modalContent", className: "w-1/2 h 1/2 bg-white relative" },
            React.createElement(CrossLogo, { className: "absolute w-5 h-5 right-5 top-5 cursor-pointer", onClick: onClose }),
            React.createElement("div", { className: "p-4 rounded-md shadow-md bg-white" },
                React.createElement("img", { src: character.image, alt: character.name, className: "w-32 h-32 rounded-full mx-auto" }),
                React.createElement("h2", { className: "text-2xl font-bold text-center mt-4" }, character.name),
                React.createElement("div", { className: "text-lg font-medium text-center mt-2" },
                    character.species,
                    " - ",
                    character.gender),
                React.createElement("hr", { className: "my-4" }),
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("div", null,
                        React.createElement("span", { className: "font-bold" }, "Status: "),
                        character.status),
                    React.createElement("div", null,
                        React.createElement("span", { className: "font-bold" }, "Type: "),
                        character.type || 'unknown'),
                    React.createElement("div", null,
                        React.createElement("span", { className: "font-bold" }, "Origin: "),
                        React.createElement("a", { href: character.origin.url }, character.origin.name)),
                    React.createElement("div", null,
                        React.createElement("span", { className: "font-bold" }, "Last known location: "),
                        React.createElement("a", { href: character.location.url }, character.location.name)),
                    React.createElement("div", null,
                        React.createElement("span", { className: "font-bold" }, "Episodes: "),
                        character.episode.length),
                    React.createElement("div", null,
                        React.createElement("span", { className: "font-bold" }, "Created: "),
                        new Date(character.created).toLocaleString())))));
    }
    else
        return null;
}
