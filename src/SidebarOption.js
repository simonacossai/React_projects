import React from 'react';
import './SidebarOption.css';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
           {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
