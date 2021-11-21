import React from 'react';

// STYLES
import {
    ArticleContentContainer,
} from './ArticleContent.styled';

const ArticleContent = (props) => (
    <ArticleContentContainer>
        {props.children}
    </ArticleContentContainer>
)

export default ArticleContent;
