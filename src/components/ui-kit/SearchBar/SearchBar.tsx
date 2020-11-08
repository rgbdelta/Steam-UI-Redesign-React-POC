import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../constants/colors';

const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.4);
  border: 0;
  padding: 10px 20px;
  border-radius: 3px;
  color: ${colors.textInverted};
  display: block;
  flex: 1 1;

  ::placeholder {
    font-style: italic;
  }
`;

const Container = styled.div`
  display: flex;
`;

interface IProps {
  onChangeText: (text: string) => void;
}

export const SearchBar = (props: IProps) => {
  return (
    <Container>
      <SearchInput
        onChange={(e) => {
          e.preventDefault();
          props.onChangeText(e.target.value);
        }}
        placeholder="Type to search..."
      />
    </Container>
  );
};
