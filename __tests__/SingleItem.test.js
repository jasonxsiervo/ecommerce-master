// Mocking the Apollo Store 


import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import { MockedProvider } from 'react-apollo/test-utils';
import SingleItem, { SINGLE_ITEM_QUERY }  from '../components/SingleItem';
import { fakeItem } from '../lib/testUtils';

describe('<SingleItem />', () => {
    it('renders with proper data', async () => {
        const mocks = [ 
            {
                // when someone makes a request with this query and variables combo
                request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' }},
                // return this fake data(moecked data)
                result: {
                    data: {
                        item: fakeItem(),
                    }
                }
            }
        ];
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <SingleItem id="123" />
            </MockedProvider>
        );
        // console.log(wrapper.debug());
        expect(wrapper.text()).toContain('Loading');
        await wait();
        wrapper.update();
        // console.log(wrapper.debug());
        expect(toJSON(wrapper.find('h2'))).toMatchSnapshot();

        expect(toJSON(wrapper.find('img'))).toMatchSnapshot();

        expect(toJSON(wrapper.find('p'))).toMatchSnapshot();

    });

    it('Error message', async () => {
        const mocks = [
            {
                request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' }},
                result: {
                    errors: [{ message: 'Items not found'}],
                },
            }
        ];

        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <SingleItem id="123" />
            </MockedProvider>
        );

        await wait();
        wrapper.update();

        const item = wrapper.find('[data-test="graphql-error"]');
        // expect(item.text()).toContain('Items not found');
        expect(toJSON(item)).toMatchSnapshot();


    });
})