import styled from 'styled-components';

export const DesktopContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  max-height: 720px;
  margin: auto;
  
  .row {
    height: 100%;
  }
    
  .col,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7 {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 1em;
  }

  /* MOBILE */
  @media (max-width: 767px) {
      width: 100%;
  }
`;
