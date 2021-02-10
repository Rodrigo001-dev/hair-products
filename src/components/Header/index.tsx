import React from 'react';

import { 
  Menu, 
  Navigation, 
  CrossIcon, 
  HashtagIcon, 
  Input, 
  SearchIcon,
  UserIcon,
  PigIcon
} from './styles';

const Header: React.FC = () => {
  return (
    <Menu>
      <Navigation>
        <h2>
          <span>PanVel</span>
          <CrossIcon />
        </h2>

        <h2>
          <HashtagIcon />
          <span>Categorias</span>
        </h2>

        <h2>
          <span>
            <Input placeholder="O que você procura ?" />
          </span>
          <SearchIcon />
        </h2>

        <h2>
          <UserIcon />
          <span>Entrar</span>
        </h2>

        <h2>
          <PigIcon />
        </h2>
      </Navigation>
    </Menu>
  );
};

export default Header;