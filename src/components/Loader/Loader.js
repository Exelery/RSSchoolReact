import React from 'react';
const getDefaultStyle = (visible) => ({
    display: visible ? 'flex' : 'none',
});
export const DEFAULT_COLOR = '#4fa94d';
export const DEFAULT_WAI_ARIA_ATTRIBUTE = {
    'aria-busy': true,
    role: 'status',
};
const Loader = ({ height = 80, width = 80, strokeWidth = 2, radius = 1, color = DEFAULT_COLOR, ariaLabel = 'tail-spin-loading', wrapperStyle, visible = true, }) => {
    const strokeWidthNum = parseInt(String(strokeWidth));
    const viewBoxValue = strokeWidthNum + 36;
    const halfStrokeWidth = strokeWidthNum / 2;
    const processedRadius = halfStrokeWidth + parseInt(String(radius)) - 1;
    return (React.createElement("div", { style: { ...getDefaultStyle(visible), ...wrapperStyle }, className: `loader`, "data-testid": "tail-spin-loading", "aria-label": ariaLabel, ...DEFAULT_WAI_ARIA_ATTRIBUTE },
        React.createElement("svg", { width: width, height: height, viewBox: `0 0 ${viewBoxValue} ${viewBoxValue}`, xmlns: "http://www.w3.org/2000/svg", "data-testid": "tail-spin-svg" },
            React.createElement("defs", null,
                React.createElement("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
                    React.createElement("stop", { stopColor: color, stopOpacity: "0", offset: "0%" }),
                    React.createElement("stop", { stopColor: color, stopOpacity: ".631", offset: "63.146%" }),
                    React.createElement("stop", { stopColor: color, offset: "100%" }))),
            React.createElement("g", { fill: "none", fillRule: "evenodd" },
                React.createElement("g", { transform: `translate(${halfStrokeWidth} ${halfStrokeWidth})` },
                    React.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: color, strokeWidth: strokeWidth },
                        React.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })),
                    React.createElement("circle", { fill: "#fff", cx: "36", cy: "18", r: processedRadius },
                        React.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })))))));
};
export default Loader;
