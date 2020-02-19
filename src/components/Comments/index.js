import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import propTypes from 'prop-types';
import { CommentsTitle, CommentsWrapper } from './styles';

export default function Comments({ url, title }) {
  const completeURL = ` https://angeldev.disqus.com${url}` ;
  return (
   <CommentsWrapper>
     <CommentsTitle> Comentários</CommentsTitle>
     <ReactDisqusComments
     shortname="angeldev"
     identifier={completeURL}
     title={title}
     url={completeURL}
     />
   </CommentsWrapper>
  );
}


Comments.propTypes = {
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}
