import styled from 'styled-components';

export const HomePageContainer = styled.div`
    h5 {
        font-size: 20px;
        font-weight: 600;
    }

    h3 {
        text-align: center;
        font-weight: 600;
    }

    @media (max-width: 767px) {
        .article-2 {
            text-align: left;
        }
    }
`;

export const ImgContent = styled.div`
    text-align: center;

    @media (max-width: 767px) {
        display: none;
    }
`;
