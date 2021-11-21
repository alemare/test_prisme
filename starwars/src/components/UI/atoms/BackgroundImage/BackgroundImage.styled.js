import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
    background-image: url(${props => props.img});
    width: 100%;
    height: ${props => (props.size) ? props.size : '31'}em;
    background-size: cover;
    background-position: 50% 0;

    @media (max-width: 767px) {
        height: 17em;
        background-size: cover;
    }
`;