import * as React from "react";

import arrow from "../assets/arrow.gif";

export default class Support extends React.Component {

    render() {
        return (<div><p>
            Se ti piace quello che facciamo, offrici una birra
            </p>
            <img className="support-arrow" width="230" height="230" src={arrow}></img>
            </div>)
    }
}
