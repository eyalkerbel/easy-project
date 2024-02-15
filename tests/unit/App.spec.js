import {shallowMount} from '@vue/test-utils';
import App from '@/App';
import SearchBox from '@/components/SearchBox';
import BusinessList from '@/components/business/BusinessList';

// Mock child components to simplify testing
jest.mock('@/components/SearchBox.vue', () => ({
    name: 'SearchBox',
    render: h => h('div')
}));
jest.mock('@/components/business/BusinessList.vue', () => ({
    name: 'BusinessList',
    render: h => h('div')
}));

describe('App.vue', () => {
    let wrapper;

    beforeEach(() => {
        // Mock fetchData method to avoid making actual HTTP requests
        App.methods.fetchData = jest.fn().mockResolvedValue([]);

        wrapper = shallowMount(App, {});
    });

    it('renders without errors', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders child components', () => {
        expect(wrapper.findComponent(SearchBox).exists()).toBe(true);
        expect(wrapper.findComponent(BusinessList).exists()).toBe(true);
    });

    // Add more tests as needed to cover functionality
});
