import React, { useRef } from 'react';
import Helmet from 'react-helmet';
import L from 'leaflet';
import { Marker } from 'react-leaflet';

import { promiseToZoomIn } from 'lib/map';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';

import gatsby_astronaut from 'assets/images/gatsby-astronaut.png';

const LOCATION = {
  lat: 43.65348,
  lng: -79.38393,
};
const LOCATION_NAME = 'Toronto, ON';
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;
const ZOOM = 10;

const timeToZoom = 2000;
const timeToOpenPopupAfterZoom = 4000;
const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000;

const popupContentHello = `<p>Hello, ${LOCATION_NAME}!</p>`;
const popupContentGatsby = `
  <div class="popup-gatsby">
    <div class="popup-gatsby-image">
      <img class="gatsby-astronaut" src=${gatsby_astronaut} />
    </div>
    <div class="popup-gatsby-content">
      <h1>Gatsby Leaflet Starter</h1>
      <p>Welcome to your new Gatsby site. Now go build something great!</p>
    </div>
  </div>
`;

const IndexPage = () => {
  const markerRef = useRef();

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  function mapEffect({ leafletElement } = {}) {
    if ( !leafletElement ) return;

    const popup = L.popup({
      maxWidth: 800,
    });

    popup.setLatLng( LOCATION );
    popup.setContent( popupContentHello );

    setTimeout( async () => {
      await promiseToZoomIn( leafletElement, ZOOM );

      const { current = {} } = markerRef || {};
      const { leafletElement: marker } = current;

      marker.bindPopup( popup );

      setTimeout(() => marker.openPopup(), timeToOpenPopupAfterZoom );
      setTimeout(() => marker.setPopupContent( popupContentGatsby ), timeToUpdatePopupAfterZoom );
    }, timeToZoom );
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings}>
        <Marker ref={markerRef} position={CENTER} />
      </Map>

      <Container type="content" className="text-center home-start">
        <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <pre>
          <code>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet</code>
        </pre>
        <p className="note">Note: Gatsby CLI required globally for the above command</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
