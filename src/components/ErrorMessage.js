import React from 'react';
export default function WarningBanner({ error, children }) {
    if (!error) {
        return null;
    }
    return React.createElement("div", { className: "warning text-red-500" }, children ? children : 'Warning!');
}
