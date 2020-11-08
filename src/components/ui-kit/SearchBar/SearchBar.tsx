import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../Colors';

export const SearchBar = () => {
  const SearchInput = styled.input`
    background-color: rgba(0, 0, 0, 0.4);
    border: 0;
    padding: 10px 20px;
    border-radius: 3px;
    color: ${colors.textInverted};
  `;

  return <SearchInput placeholder="Type to search..." />;
};
