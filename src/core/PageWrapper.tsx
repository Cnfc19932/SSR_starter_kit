import React, { PureComponent } from "react";

interface Props {
    actions: any[];
}

class PageWrapper extends PureComponent<Props> {
    componentDidMount() {
        const { actions } = this.props;

        console.log("actions", actions);
    }

    render() {
        return this.props.children;
    }
}

export default PageWrapper;
