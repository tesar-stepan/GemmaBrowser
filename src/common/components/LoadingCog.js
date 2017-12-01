import * as React from "react";
import FontAwesome from 'react-fontawesome'

const LoadingCog = (props) => {
    const loadingText = props.refreshing ? 'Refreshing' : 'Loading';
    const header = props.active ? <span><FontAwesome name='cog' spin/> {loadingText}</span> : undefined;
    return (
        <div className="loading-cog">{header}</div>
    )
}

export default LoadingCog;