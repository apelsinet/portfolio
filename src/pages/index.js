import React from 'react';
import Link from 'gatsby-link';
import Orange from './Orange';

const IndexPage = () => (
    <div
        style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Orange
            alt="Orange"
            style={{
                width: '70vw',
                maxWidth: '400px',
                margin: 0,
            }}
        />
    </div>
);

export default IndexPage;
