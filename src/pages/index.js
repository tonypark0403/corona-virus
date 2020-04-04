import React from 'react';
import Helmet from 'react-helmet';
import { Popup, Circle } from 'react-leaflet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

const DEFAULT_LOCATION = {
  lat: 43.65348,
  lng: -79.38393,
};

const CENTER = [DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng];

const IndexPage = () => {
  return (
    <Layout pageName='home'>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map center={CENTER} zoom={10}>
        <Circle
          center={CENTER}
          fillColor='purple'
          color='purple'
          radius={10000}
        >
          <Popup>Toronto, ON</Popup>
        </Circle>
      </Map>

      <Container type='content' className='text-center home-start'>
        <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <pre>
          <code>
            gatsby new [directory]
            https://github.com/colbyfayock/gatsby-starter-leaflet
          </code>
        </pre>
        <p className='note'>
          Note: Gatsby CLI required globally for the above command
        </p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
