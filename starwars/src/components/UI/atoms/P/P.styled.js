import styled from 'styled-components';

const handleSize = size => {
    switch (size) {
        case "S":
            return "small";
        case "M":
            return "medium";
        case "L":
            return "large";
        default:
            return "medium";
    }
  };

  const handleSizeMobile = size => {
    switch (size) {
        case "S":
            return "small";
        case "M":
            return "small";
        case "L":
            return "medium";
        default:
            return "medium";
    }
  };

export const PContainer = styled.div`
    font-size: ${({ size }) => handleSize(size)};
    margin-bottom: 1em;

    /* MOBILE */
    @media (max-width: 767px) {
        font-size: ${({ size }) => handleSizeMobile(size)};
    }
`;