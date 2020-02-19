import React from 'react';
import PostItem from '../PostItem';
// import { Container } from './styles';

export default function Hit({ hit }) {
  return (
    <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    category={hit.category}
    date={hit.date}
    description={hit.description}
    background={hit.background}
    />
  );
}
