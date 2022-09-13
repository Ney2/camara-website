import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BSIcons from 'react-icons/bs';

export const navItems = [
    {   
        id: 1,
        title: 'Home',
        path:'/',
        icon: <AiIcons.AiFillHome className="icon"/>,
        nName: 'nav-item',
        sName: 'sidebar-item',
    },
    {  
        id: 2,
        title: 'Equipments',
        path:'/equipments',
        icon: <BSIcons.BsWrench className="icon"/>,
        nName: 'nav-item',
        sName: 'sidebar-item',
    },
    {
        id: 3,
        title: 'Schools & Teachers',
        path:'/schools&teachers',
        icon: <FaIcons.FaSchool className="icon"/>,
        nName: 'nav-item',
        sName: 'sidebar-item',
    },
    {
        id: 4,
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper className="icon"/>,
        nName: 'nav-item',
        sName: 'sidebar-item',
    },
    {
        id: 5,
        title: 'Gallery',
        path:'/gallery',
        icon: <FaIcons.FaPhotoVideo className="icon"/>,
        nName: 'nav-item',
        sName: 'sidebar-item',
    }
];
