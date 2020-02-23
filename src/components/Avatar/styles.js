import styled from 'styled-components';
import Img from 'gatsby-image';
import media from 'styled-media-query';

export const AvatarWrapper = styled(Img)`
  border-radius: 30px;
  height: 3.75em;
  width: 3.75em;
  margin: auto;

  ${media.lessThan("large")`
    height: 1.875rem;
    width: 1.875rem;
  `
  }
`;
