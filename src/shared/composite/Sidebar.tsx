import Icon, { IconProps } from '../components/Icon';
import React from 'react';

interface MenuList {
  icon: IconProps['name'];
  text: string;
}

const menuList: MenuList[] = [
  { icon: 'building', text: 'Recherche' },
  { icon: 'phone', text: 'Conseiller' },
  { icon: 'people', text: 'Profil' },
];

function Sidebar() {
  return (
    <div
      className="w-52 h-full border-r border-neutral-200 hidden md:flex flex-col items-center">
      <div className="self-start m-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             color="#16221F">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.704 1.496A3.5 3.5 0 014.5 1h15a3.5 3.5 0 11-3.221 4.869 1 1 0 011.84-.782A1.5 1.5 0 1019.5 3h-15a1.5 1.5 0 101.38 2.087 1 1 0 011.841.782 3.5 3.5 0 11-5.017-4.373zM13 10a1 1 0 10-2 0v12a1 1 0 102 0V10zm5 1a1 1 0 10-2 0v9a1 1 0 102 0v-9zM7 10a1 1 0 011 1v9a1 1 0 11-2 0v-9a1 1 0 011-1z"
                fill="#16221F"></path>
        </svg>
      </div>
      <ul>
        {menuList.map(menu => (
          <li className="m-5 space-x-3 flex items-center">
            <Icon name={menu.icon}></Icon>
            <span>{menu.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto mb-10">
        <button className="space-x-3 flex items-center"><Icon
          name="exit"></Icon><span>Déconnexion</span></button>
      </div>
    </div>
  );
}

export default Sidebar;
