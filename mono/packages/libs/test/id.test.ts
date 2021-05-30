import { generateRandomId } from '../src/index';
test('Should generate a UUID', () => {
    const id = generateRandomId();
    expect(id).toBeTruthy();
});