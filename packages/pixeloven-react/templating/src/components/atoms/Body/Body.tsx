import React from "react";
import { HelmetData } from "react-helmet";

interface BodyProps {
    children: string;
    scripts?: React.ReactNode;
    state?: object;
    helmet?: HelmetData;
}

function Body(props: BodyProps) {
    const { children, helmet, scripts, state } = props;
    const bodyAttrs = helmet ? helmet.bodyAttributes.toComponent() : {};
    const serializedState = JSON.stringify(state || {});
    const innerHTML = {
        __html: children,
    };
    const initialState = {
        __html: `window.initialState = ${serializedState};`,
    };
    return (
        <body {...bodyAttrs}>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root" dangerouslySetInnerHTML={innerHTML} />
            <script dangerouslySetInnerHTML={initialState} />
            {scripts}
            {helmet && helmet.script.toComponent()}
        </body>
    );
}

export default Body;
