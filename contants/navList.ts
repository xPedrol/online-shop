import {TNavList} from "../models/NavList";
import {HiOutlineHome} from "react-icons/hi";
import {IoShirtOutline} from "react-icons/io5";
import {RiContactsLine} from "react-icons/ri";
import {AiOutlineShopping} from "react-icons/ai";


export const navList: TNavList[] = [
    {
        id: 0,
        name: 'Home',
        url: '/',
        icon: HiOutlineHome
    },
    {
        id: 1,
        name: 'Products',
        url: '/products',
        icon: IoShirtOutline
    },
    {
        id: 2,
        name: 'Purchases',
        url: '/purchases',
        icon: AiOutlineShopping
    },
    {
        id: 3,
        name: 'Contact',
        url: '/contact',
        icon: RiContactsLine
    }
];