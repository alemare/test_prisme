import styled from 'styled-components';

export const ArticleContentContainer = styled.div`
    background-color: white;
    color: black;
    margin-top: 12%;
    text-align: left;

    ul {
        list-style-type: '- ';
        padding-left: 0;
    }

    img {
        margin-bottom: 20px;
        width: 100%;
    }

    /* MOBILE */
    @media (max-width: 767px) {
        margin: 8% 12%;
        text-align: center;
    }
`;