import {shallowMount} from '@vue/test-utils';
import CardInfo from '@/components/business/card/CardInfo.vue';

jest.mock('vue-i18n', () => ({
    useI18n: jest.fn().mockReturnValue({
        t: jest.fn().mockImplementation((key) => key), // Mock translation function
    }),
}));

describe('CardInfo.vue', () => {
    it('renders business information correctly', () => {
        const business = {
            name: 'Test Business',
            rating: '4.5',
            address: '123 Main St',
            logo: '/logo.png',
            category: 'Food',
            openStatus: 'Open',
        };

        const wrapper = shallowMount(CardInfo, {
            props: {business},
        });

        expect(wrapper.find('.class-name').text()).toContain(business.name);
        expect(wrapper.find('.biz-address').text()).toContain(business.address);
        expect(wrapper.find('.class-score').text()).toContain(business.rating);
    });
});
