import React, { Component } from 'react';
import Link from 'gatsby-link';
import Orange from './Orange';

class IndexPage extends Component {
    state = {
        isOrangeFloored: false,
    };

    onOrangeClick = () =>
        this.setState({ isOrangeFloored: !this.state.isOrangeFloored });

    render() {
        const { isOrangeFloored } = this.state;
        return (
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flex: 1,
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <header
                    style={{
                        opacity: isOrangeFloored ? 1 : 0,
                        position: 'absolute',
                        textAlign: 'center',
                        transform: isOrangeFloored
                            ? 'translateY(0)'
                            : 'translateY(3vh)',
                        transition:
                            'opacity 0.3s ease-in, transform 0.2s ease-in',
                    }}
                >
                    <h1 style={{ marginBottom: 0 }}>
                        <a
                            href="https://www.linkedin.com/in/mattias-prada-2aa2a743/"
                            target="_blank"
                        >
                            Mattias Prada
                        </a>
                    </h1>
                    <p style={{ textTransform: 'uppercase' }}>
                        Full stack developer
                    </p>
                </header>

                <Orange
                    alt="Orange"
                    onClick={this.onOrangeClick}
                    style={{
						cursor: 'pointer',
                        margin: 0,
                        maxWidth: '400px',
                        transform: isOrangeFloored
                            ? 'translateY(50vh)'
                            : 'translateY(0)',
                        transition:
                            'transform 0.2s ease-in-out, filter 0.1s ease-out',
                        width: '70vw',
                    }}
                />
            </div>
        );
    }
}

export default IndexPage;
