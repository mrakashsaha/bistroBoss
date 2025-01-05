import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === "popular");

    return (
        <div className='mb-12'>
            <SectionTitle subHeading = {"Check it out"} heading = {"FROM OUR MENU"}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-20'>
            {
                popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;