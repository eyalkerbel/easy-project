import {shallowMount} from '@vue/test-utils';
import BusinessCard from '@/components/business/card/BusinessCard.vue';
import CardInfo from '@/components/business/card/CardInfo.vue';
import CardBadges from '@/components/business/card/badge/CardBadges.vue';
import CardReview from '@/components/business/card/CardReview.vue';


jest.mock('vue-i18n', () => ({
    useI18n: jest.fn().mockReturnValue({
        t: jest.fn().mockImplementation((key) => key)
    }),
}));

describe('BusinessCard.vue', () => {
    it('renders business information correctly', () => {
        const business = {
            name: 'Test Business',
            rating: '4.5',
            address: '123 Main St',
            logo: '/logo.png',
            category: 'Food',
            openStatus: 'Open',
            distance: '5'
        };

        const wrapper = shallowMount(BusinessCard, {
            props: {business},
        });

        expect(wrapper.findComponent(CardInfo).exists()).toBe(true);
        expect(wrapper.findComponent(CardBadges).exists()).toBe(true);
        expect(wrapper.findComponent(CardReview).exists()).toBe(true);
        expect(wrapper.find('.class-distance').text()).toContain('5');
    });
});
