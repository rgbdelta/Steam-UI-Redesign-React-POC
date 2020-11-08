import styled from '@emotion/styled';
import React from 'react';
import { AiOutlineHdd, AiOutlineTag } from 'react-icons/ai';
import { SearchBar } from '../../../../components/ui-kit/SearchBar/SearchBar';
import { Heading3 } from '../../../../components/ui-kit/Typography';
import SteamLogo from './assets/steam.png';

export const SidePanel = () => {
  const ImageContainer = styled.img`
    width: 160px;
    margin: 15px;
  `;

  const MenuItemsContainer = styled.div`
    margin: 15px;
  `;

  const menuItems: IMenuItemProps[] = [
    {
      icon: <AiOutlineTag />,
      text: 'Store',
    },
    {
      icon: <AiOutlineHdd />,
      text: 'Library',
    },
  ];

  return (
    <div>
      <ImageContainer src={SteamLogo} />
      <MenuItemsContainer>
        {menuItems.map((m) => (
          <MenuItem {...m} />
        ))}
      </MenuItemsContainer>
      <SearchBar />
    </div>
  );
};

interface IMenuItemProps {
  icon: JSX.Element;
  text: string;
}

const MenuItem = (props: IMenuItemProps) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px 0;
  `;
  const IconContainer = styled.div`
    flex: 1 1 0;
  `;
  const TextContainer = styled.div`
    flex: 2 2 0;
  `;

  return (
    <Container>
      <IconContainer>
        <Heading3 intent="inverted">{props.icon}</Heading3>
      </IconContainer>
      <TextContainer>
        <Heading3 intent="inverted">{props.text}</Heading3>
      </TextContainer>
    </Container>
  );
};
