import React from 'react';
import { borderColor } from '../../utils';
import ErrorMessage from '../ErrorMessage';
export default function RadioBtns({ error, register, values }) {
    return (React.createElement("div", { className: "switch-field" },
        values.map((el) => (React.createElement("label", { htmlFor: `switch_${el}`, key: el },
            React.createElement("input", { type: "radio", id: `switch_${el}`, value: el, ...register('gender', {
                    required: true,
                }) }),
            React.createElement("span", { className: `solid border-[1px] cursor-pointer ${borderColor(!!error)}` }, el)))),
        React.createElement(ErrorMessage, { error: !!error }, " Select one option! ")));
}
