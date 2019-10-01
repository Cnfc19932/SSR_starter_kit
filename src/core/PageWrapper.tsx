import React, {PureComponent} from "react";

class PageWrapper extends PureComponent {
    componentDidMount() {

    }

    render() {
        return this.props.children;
    }
}

export default PageWrapper;