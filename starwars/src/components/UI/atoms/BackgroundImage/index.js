import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import {
    BackgroundImageContainer,
} from './BackgroundImage.styled';

const BackgroundImage = ({ backgroundImage, size }) => (
    <BackgroundImageContainer img={backgroundImage} size={size} />
)

BackgroundImage.propTypes = {
    backgroundImage: PropTypes.node.isRequired,
    size: PropTypes.number
};

export default BackgroundImage;
