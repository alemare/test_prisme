import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-image: url(${props => props.backgroundImage});
    height: 271px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #181818;
    overflow: hidden;
    color: #767676;
    padding-bottom: 30px;

    h5.copyright-title {
        margin-top: 62px;
        font-size: smaller;
        margin-bottom: 40px;
    }

    li {
        list-style: none;
        margin-bottom: 6px;

        a {
            color: #767676;
            font-size: smaller;
            text-decoration: revert;
        }
    }

    p {
        text-transform: uppercase;
        font-size: small;
    }

    .social-network {
        display: inline-flex;
        img {
            margin: 0 10px;
        }
    }

    /* MOBILE */
    @media (max-width: 767px) {
        height: auto;
        padding-top: 30px;

        .copyright-title {
            display: none;
        }

        .column-footer {
            &:nth-child(-n+2) {
                display: contents;
            }
            &:last-child {
                display: flex;
                justify-content: center;

                p {
                    margin-top: 9px;
                    margin-right: auto;
                    padding-left: 10px;
                }
            }
        }
    }
`;
