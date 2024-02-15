import {mount} from '@vue/test-utils';
import SearchBox from '@/components/SearchBox.vue';


jest.useFakeTimers();

describe('SearchBox.vue', () => {
    it('emits search event after debounce delay', async () => {
        const wrapper = mount(SearchBox);

        // Simulate user input
        wrapper.find('input').setValue('test');

        jest.advanceTimersByTime(200);

        // Assert that the 'search' event was emitted with the correct query
        expect(wrapper.emitted().search).toBeTruthy();
        expect(wrapper.emitted().search.length).toBe(1);
        expect(wrapper.emitted().search[0]).toEqual(['test']);
    });

    it('emits search event only once after multiple inputs within debounce delay', async () => {
        const wrapper = mount(SearchBox);

        // Simulate multiple user inputs
        wrapper.find('input').setValue('first input');
        wrapper.find('input').setValue('second input');
        wrapper.find('input').setValue('third input');

        // Wait for the debounce delay (200ms in this example)
        jest.advanceTimersByTime(200);

        // Assert that the 'search' event was emitted only once with the last input
        expect(wrapper.emitted().search).toBeTruthy();
        expect(wrapper.emitted().search.length).toBe(1);
        expect(wrapper.emitted().search[0]).toEqual(['third input']);
    });

    it('does not emit search event immediately after input', async () => {
        const wrapper = mount(SearchBox);

        // Simulate user input
        wrapper.find('input').setValue('test');

        // Assert that the 'search' event is not emitted immediately
        expect(wrapper.emitted().search).toBeFalsy();

        // Fast-forward to just before the debounce delay
        jest.advanceTimersByTime(199);

        // Assert that the 'search' event is still not emitted
        expect(wrapper.emitted().search).toBeFalsy();

        // Fast-forward to just after the debounce delay
        jest.advanceTimersByTime(1);

        // Assert that the 'search' event is emitted after the debounce delay
        expect(wrapper.emitted().search).toBeTruthy();
    });
});