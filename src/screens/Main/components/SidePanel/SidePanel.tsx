import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AiOutlineHdd, AiOutlineTag } from 'react-icons/ai';
import { RiSettings3Line, RiUser3Line, RiDownloadCloud2Line } from 'react-icons/ri';
import { Expandable } from '../../../../components/ui-kit/Expandable/Expandable';
import { SearchBar } from '../../../../components/ui-kit/SearchBar/SearchBar';
import { Heading2 } from '../../../../components/ui-kit/Typography';
import { FakesUtil } from '../../../../utils/fakes';
import SteamLogo from './assets/steam.png';
import { ISideMenuItemProps, SidePanelMenuItem } from './SideMenuItem';

const MENU_ITEMS: ISideMenuItemProps[] = [
  {
    icon: <AiOutlineTag />,
    text: 'Store',
  },
  {
    icon: <AiOutlineHdd />,
    text: 'Library',
  },
];

const getGameLists = () => {
  const recents = FakesUtil.getListOfGames(5);
  const favourites = FakesUtil.getListOfGames(6);
  const all = FakesUtil.getListOfGames(120);
  return [
    {
      title: 'Recent',
      items: recents,
    },
    {
      title: `Favourite`,
      items: favourites,
    },
    {
      title: `All games`,
      items: all,
    },
  ];
};

const GAME_LISTS = getGameLists();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0px;
`;
const ImageContainer = styled.img`
  width: 160px;
  padding: 30px;
  align-self: center;
`;
const MenuItemsContainer = styled.div`
  margin: 15px;
  padding: 0px 30px;
`;
const SearchBarContainer = styled.div`
  margin-bottom: 5px;
  padding: 0px 30px;
`;
const GameListsContainer = styled.div`
  flex: 1 1;
  mask-image: linear-gradient(to top, transparent 8%, black 25%, black 95%, transparent 100%);
  overflow-y: scroll;
  padding: 15px 30px 80px 30px;

  > div {
    margin: 0px 0px 15px 0px;
  }
`;
const BottomMenuContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

export const SidePanel = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExpandables = GAME_LISTS.map((e) => {
    if (searchQuery.length === 0) {
      return e;
    }
    const filteredItems = e.items.filter((item) =>
      item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase() || ''),
    );
    return { ...e, items: filteredItems };
  });

  return (
    <Container>
      <ImageContainer src={SteamLogo} />

      <MenuItemsContainer>
        {MENU_ITEMS.map((m, index) => (
          <SidePanelMenuItem {...m} key={index} />
        ))}
      </MenuItemsContainer>

      <SearchBarContainer>
        <SearchBar onChangeText={(text) => setSearchQuery(text)} />
      </SearchBarContainer>

      <GameListsContainer>
        {filteredExpandables.map((exp, index) => (
          <Expandable {...exp} key={index} intent="inverted" />
        ))}
      </GameListsContainer>

      <BottomMenuContainer>
        <Heading2 intent="inverted">
          <RiSettings3Line />
        </Heading2>
        <Heading2 intent="inverted">
          <RiUser3Line />
        </Heading2>
        <Heading2 intent="inverted">
          <RiDownloadCloud2Line />
        </Heading2>
      </BottomMenuContainer>
    </Container>
  );
};
