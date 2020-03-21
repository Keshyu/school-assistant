import React from 'react';
import './Header.css';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import { useHistory } from 'react-router-dom';

function Header({ name, organization }: HeaderProps) {
  let history = useHistory();

  return (
    <div className="header flex flex-row relative p-3">
      <div>
        <div className="leading-tight whitespace-pre-wrap name text-white w-10/12">
          {name}
        </div>

        <div className="text-xs2 text-white">
          {organization}
        </div>
      </div>

      <div className="flex-1 w-auto" />

      <div>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
                <IconButton  {...bindTrigger(popupState)}>
                  <AccountCircleIcon htmlColor="white" fontSize="large" />
                </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    history.push('/');
                  }}
                  >
                    Выход
                  </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </div>
  );
}

export interface HeaderProps {
  name: string,
  organization: string,
}

export default Header;