import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../../Pages/Home/PopularMenu'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertsbg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter (item=> item.category === "dessert");
    const pizzas = menu.filter (item=> item.category === "pizza");
    const salads = menu.filter (item=> item.category === "salad");
    const soups = menu.filter (item=> item.category === "soup");
    const offered = menu.filter (item=> item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Todays Offe"}></SectionTitle>
            <MenuCategory items = {offered}></MenuCategory>
            <MenuCategory items={desserts} title={"desserts"} coverImg={dessertsbg}></MenuCategory>
            <MenuCategory items={pizzas} title={"pizza"} coverImg={pizzaBg}></MenuCategory>
            <MenuCategory items={salads} title={"salads"} coverImg={saladBg}></MenuCategory>
            <MenuCategory items={soups} title={"soup"} coverImg={soupBg}></MenuCategory>
        </div>
    );
};

export default Menu;