import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import './index.css';

const Layout = ({ children, data }) => (
    <div
        style={{
            alignItems: 'center',
            background: '#c02942',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
    >
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                maxWidth: 960,
                width: '100%',
            }}
        >
            {children()}
        </div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
