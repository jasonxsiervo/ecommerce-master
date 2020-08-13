import { shallow, moount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartCount from '../components/CartCount';

describe('<CartCount />', () => {
    // it('renders', () => {
    //     shallow(<CartCount count={10} />);    
    // });

    // it('matches the snapshot', () => {
    //     const wrapper = shallow(<CartCount count={11} />);
    //     expect(toJSON(wrapper)).toMatchSnapshot();
    // });

    // You can also snapshot a particular part of a component and not the whole component
    // it('matches the snapshot', () => {
    //     const wrapper = shallow(<CartCount count={11} />);
    //     expect(toJSON(wrapper.find(span))).toMatchSnapshot();
    // });

    // Updates via props
    it('updates via props', () => {
        const wrapper = shallow(<CartCount count={50} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
        wrapper.setProps({count: 10});
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    // Shallow vs Mount
    // NOTE: Might produce errors
    // it('updates via props', () => {
    //     const wrapper = mount(<CartCount count={50} />);
    //     console.log(wrapper.debug());
    //     return;
    //     expect(toJSON(wrapper)).toMatchSnapshot();
    //     wrapper.setProps({count: 10});
    //     expect(toJSON(wrapper)).toMatchSnapshot();
    // });
});
