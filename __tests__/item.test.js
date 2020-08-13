import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';

const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 4000,
    description: 'This item is really cool!',
    image: 'dog.jpg',
    largeImage: 'largedog.jpg',
};

describe('<Item />', () => {
    it.skip('renders the image properly', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />);
        const image = wrapper.find('img');      // find will literally find a component for you
        // expect(image.props().src).toBe('largePug.jpg');
        // expect(image.props().src).toBe(fakeItem.title);
        expect(image.props().src).toBe(fakeItem.image);     // checks the img component if it has a src props
                                                            // you can use fakeItem.image to make sure if the testing object changes, it will also dynamically change the testing
    });             

    it.skip('renders and displays properly', () => {
        const wrapper = shallow(<ItemComponent  item={fakeItem} />);
        const PriceTag = wrapper.find('PriceTag');
        // console.log(PriceTag.dive().text());     // text will tell you the text inside the element
        expect(PriceTag.dive().text()).toBe('$40');     // dive will shallow render 1 level deeper
        expect(wrapper.find('Title a').text()).toBe(fakeItem.title);     // Title a goes 1 level deeper within the Title component
    });

    it.skip('renders out the buttons properly', () => {
        const wrapper = shallow(<ItemComponent  item={fakeItem} />);
        // console.log(wrapper.debug());    // this is used to show the elements that are found inside the component
        const buttonList = wrapper.find('.buttonList');     // find helps you find a particular component or div by searching it by name
        // console.log('this you? ' + buttonList.debug());
        expect(buttonList.children()).toHaveLength(3);      // children is similar to dive, it will shallow render 1 level deeper
        expect(buttonList.find('Link')).toHaveLength(1);
        expect(buttonList.find('Link').exists()).toBe(true);
        expect(buttonList.find('Link').exists()).toBe(true);
        expect(buttonList.find('AddToCart').exists()).toBe(true);
        // expect(buttonList.find('Deleteitem')).tohaveLength(1);
        // expect(buttonList.find('Deleteitem')).toBeTruthy();
        expect(buttonList.find('Deleteitem').exists()).toBe(true);
    });
});