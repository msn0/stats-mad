import test from 'ava';
import mad from './';

test('should return expected value', t => {
    t.is(mad([1, 1, 2, 2, 4, 6, 9]), 1);
});
