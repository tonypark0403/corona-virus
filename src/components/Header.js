import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>Corona virus (COVID-19)</h1>
        <ul>
          <li>
            <a href="https://github.com/tonypark0403/gatsby">Gatsby Starter</a>
          </li>
          <li>
            <a href="https://github.com/tonypark0403/corona-virusW">
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
