import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import {
    PContainer,
} from './P.styled';

const P = (props) => (
    <PContainer size={props.size}>
        {props.children}
    </PContainer>
)

P.propTypes = {
    size: PropTypes.oneOf(['S', 'M', 'L']),
};

export default P;
