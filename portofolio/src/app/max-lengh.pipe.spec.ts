import { MaxLenghPipe } from './max-lengh.pipe';

describe('MaxLenghPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxLenghPipe();
    expect(pipe).toBeTruthy();
  });
});
