import './WarehouseHeader.css';
import { headerItems } from '../backend-json/headerItems';
import { SearchInput } from './SearchInput';
import  searchImage  from '../assets/images/icons/search-icon.png';
import menuImage from '../assets/images/icons/menu.png';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

export function WarehouseHeader({ headerState}) {
    var title = headerState == 'inventory' ? headerItems[0].title
        :
        headerItems[1].title;
    var details = headerState == 'inventory' ? headerItems[0].details
        :
        headerItems[1].details;
    return (
        <div className='warehouse-header'>
            <div className='warehouse-header-right'>
                <p className='warehouse-header-title'>
                    {title}
                </p>
                <p className='warehouse-header-txt'>
                    {details}
                </p>
            </div>
        </div>
    )
}