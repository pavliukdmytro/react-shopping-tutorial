import React, {useState} from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = () => {
    const [activeItem, setActiveItem] = useState('all');
    
    const handleItemClick = (e, { name }) => setActiveItem(name);
    
    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={activeItem === 'all'}
                onClick={handleItemClick}
            >Все</Menu.Item>
            <Menu.Item
                name='popular'
                active={activeItem === 'popular'}
                onClick={handleItemClick}
            >Популярные</Menu.Item>
            <Menu.Item
                name='price_hight'
                active={activeItem === 'price_hight'}
                onClick={handleItemClick}
            >Цена дорогие</Menu.Item>
            <Menu.Item
                name='price_low'
                active={activeItem === 'price_low'}
                onClick={handleItemClick}
            >Цена дешевые</Menu.Item>
            <Menu.Item
                name='author'
                active={activeItem === 'author'}
                onClick={handleItemClick}
            >Автор</Menu.Item>
            {/*<Menu.Menu position='right'>*/}
            {/*    <Menu.Item>*/}
            {/*        <Input icon='search' placeholder='Search...' />*/}
            {/*    </Menu.Item>*/}
            {/*    <Menu.Item*/}
            {/*        name='logout'*/}
            {/*        active={activeItem === 'logout'}*/}
            {/*        onClick={handleItemClick}*/}
            {/*    />*/}
            {/*</Menu.Menu>*/}
        </Menu>
    )
};

export default Filter;