import styled from 'styled-components';

// ASSETS
import MenuPicto from '../../../../assets/menu.svg';
import ClosePicto from '../../../../assets/close.svg';
import BackgroundStars from '../../../../assets/header-bg.png';

export const HeaderContainer = styled.div`
    text-transform: uppercase;
    font-size: small;
    font-weight: 600;

    .navbar-content {
        background-color: #080808b8;
        a.nav-link {
            color: white;
        }
    }

    .navbar-light .navbar-toggler {
        background-color: transparent;
        border-color: transparent;
    }

    .mobile-navbar {
        margin-left: auto;
        outline: none;
        border: none;

        .navbar-toggler-icon {
            background-color: white;
            -webkit-mask-size: contain;
            mask-size: contain;
            -webkit-mask-position: center;
            mask-position: center;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            mask-image: url(${ClosePicto});
        }

        &.collapsed {
            .navbar-toggler-icon {
                mask-image: url(${MenuPicto});
            }
        }
    }

    /* MOBILE */
    @media (max-width: 767px) {
        .navbar-content {
            background-image: url(${BackgroundStars});
        }

        .navbar-toggler-icon {
            background-image: none;
        }

        .navbar-collapse.collapse.show {
            height: 100vh;
            font-size: large;

            .navbar-nav {
                a {
                    margin: 10px 0;
                }
            }
        }
    }
`;
