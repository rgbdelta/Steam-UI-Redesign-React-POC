import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AiOutlineHdd, AiOutlineTag } from 'react-icons/ai';
import { Expandable } from '../../../../components/ui-kit/Expandable/Expandable';
import { SearchBar } from '../../../../components/ui-kit/SearchBar/SearchBar';
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

const getGameExpandables = () => {
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

const GAME_EXPANDABLES = getGameExpandables();

const ImageContainer = styled.img`
  width: 160px;
  margin: 15px;
`;

const MenuItemsContainer = styled.div`
  margin: 15px;
`;

const ExpandableContainer = styled.div`
  margin: 15px 0px;
`;

export const SidePanel = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExpandables = GAME_EXPANDABLES.map((e) => {
    if (searchQuery.length === 0) {
      console.log(e);
      return e;
    }
    const filteredItems = e.items.filter((item) =>
      item.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase() || ''),
    );
    return { ...e, items: filteredItems };
  });

  return (
    <div>
      <ImageContainer src={SteamLogo} />

      <MenuItemsContainer>
        {MENU_ITEMS.map((m) => (
          <SidePanelMenuItem {...m} />
        ))}
      </MenuItemsContainer>

      <SearchBar onChangeText={(text) => setSearchQuery(text)} />

      {filteredExpandables.map((exp) => (
        <ExpandableContainer>
          <Expandable {...exp} intent="inverted" />
        </ExpandableContainer>
      ))}
    </div>
  );
};
