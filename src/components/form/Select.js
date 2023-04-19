import React from 'react';
import ErrorMessage from '../ErrorMessage';
import { borderColor } from '../../utils';
export default function MySelect({ error, register, values }) {
    return (React.createElement("div", { className: "flex flex-col items-start" },
        React.createElement("label", { htmlFor: "select" }, "Choose your favorit"),
        React.createElement("select", { ...register('rating', {
                required: 'Choose something',
            }), id: "select", className: `cursor-pointer border-blue-500 border-2 font-bold
          py-1 px-4 rounded-full focus:outline-none ${borderColor(!!error)}` },
            React.createElement("option", { value: "", disabled: true, hidden: true }, "Choose here"),
            values.map((el) => (React.createElement("option", { value: el, key: el }, el)))),
        React.createElement(ErrorMessage, { error: !!error }, error?.message)));
}
