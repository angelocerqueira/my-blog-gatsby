import React from 'react';
import PropTypes from 'prop-types';
import getThemeColor from '../../utils/getThemeColor';

import { PostItemDate, PostItemDescription, PostItemInfo, PostItemLink, PostItemTitle, PostItemWrapper, PostItemTag  } from './styles';

export default function PostItem({
  slug,
  category,
  date,
  timeToRead,
  title,
  description,
  background
 }) {
  return (
    <PostItemLink
    to={slug}
    cover
    direction="right"
    duration={0.6}
    bg={getThemeColor()}>

      <PostItemWrapper>
        <PostItemTag background={background} >
          {category}
        </PostItemTag>
        <PostItemInfo>
          <PostItemDate>{date} - {timeToRead} min de Leitura </PostItemDate>
          <PostItemTitle>{title}</PostItemTitle>
          <PostItemDescription>
           {description}
          </PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
    );

  }
  PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    background: PropTypes.string,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
