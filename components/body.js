import { Component } from "react";

class BodyClass extends Component {
    componentDidMount() {
        this.setBodyClass('leading-normal tracking-normal text-white gradient');
    }

    setBodyClass(className) {
        document.body.className = className;
    }

    render() {
        return null;
    }
}

export default BodyClass;