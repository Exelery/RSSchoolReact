import React from 'react';
import { Link } from 'react-router-dom';
export function ErrorPage() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "This is the error page"),
        React.createElement(Link, { to: "/" }, "Go Home")));
}
