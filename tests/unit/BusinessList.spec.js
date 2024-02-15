import {shallowMount} from '@vue/test-utils';
import BusinessCard from '@/components/business/card/BusinessCard';
import BusinessList from '@/components/business/BusinessList';


jest.mock('vue-i18n', () => ({
    useI18n: jest.fn().mockReturnValue({
        t: jest.fn().mockImplementation((key) => key), // Mock translation function
    }),
}));

describe('BusinessList.vue', () => {
    it('renders a list of business cards', () => {
        const businesses = [
            {
                id: 1,
                name: 'Business 1',
                description: 'Description 1',
                rating: '4.2',
                address: 'Address 1',
                logo: '/logo1.png',
                category: 'Category 1',
                openStatus: 'Open',
                distance: 90
            },
            {
                id: 2,
                name: 'Business 2',
                description: 'Description 2',
                rating: '4.5',
                address: 'Address 2',
                logo: '/logo2.png',
                category: 'Category 2',
                openStatus: 'Closed',
                distance: 60
            },
            {
                id: 3,
                name: 'Business 3',
                description: 'Description 3',
                rating: '4.8',
                address: 'Address 3',
                logo: '/logo3.png',
                category: 'Category 3',
                openStatus: 'Open',
                distance: 32
            },
        ];

        // Mount the BusinessList component with sample businesses data
        const wrapper = shallowMount(BusinessList, {
            props: {businesses},
            stubs: {
                BusinessCard,
            },
        });
        expect(wrapper.findComponent(BusinessCard).exists()).toBe(true);
        expect(wrapper.findAllComponents(BusinessCard)).toHaveLength(businesses.length);

    });

});