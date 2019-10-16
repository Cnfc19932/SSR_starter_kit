import React from "react";
import {Link} from "react-router-dom";
import styles from './Main.module.css';

class MainLayout extends React.PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div>
                <header className={styles.a}>
                    <Link to="/1">1</Link>
                    <Link to="/2">2</Link>
                    <Link to="/2">3</Link>
                </header>
                <section>
                    {children}
                </section>
            </div>
        );
    }
}

export default MainLayout;