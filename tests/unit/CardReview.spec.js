import {shallowMount} from '@vue/test-utils'
import CardReview from '@/components/business/card/CardReview.vue';


describe('CardReview.vue', () => {
    it('renders props.msg when passed', () => {
        const business = {
            name: 'Test Business',
            rating: '4.5',
            address: '123 Main St',
            logo: '/logo.png',
            category: 'Food',
            openStatus: 'Open',
            review: [{
                title: 'title title', "image": "https://easy.co.il/n/getgoogleuserimage?googleid=111211668231796586254"
            }]
        };
        const wrapper = shallowMount(CardReview, {
            props: {business}
        })
        expect(wrapper.text()).toMatch('title title')
        const img = wrapper.find('img');
        expect(img.attributes('src')).toBe(business.review[0].image);
    })
})
