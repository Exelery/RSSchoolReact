import React from 'react';
import { borderColor } from '../../utils';
import ErrorMessage from '../ErrorMessage';
export default function Tags({ register, error, values }) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex gap-3 flex-wrap" }, values.map((el) => (React.createElement("div", { className: `tag`, key: el },
            React.createElement("label", null,
                React.createElement("input", { type: "checkbox", id: "check", ...register('category', {
                        required: 'Select at least one tag!',
                    }), value: el }),
                React.createElement("span", { className: `${borderColor(!!error)}` },
                    "#",
                    el[0].toUpperCase() + el.slice(1))))))),
        React.createElement(ErrorMessage, { error: !!error }, error?.message)));
}
