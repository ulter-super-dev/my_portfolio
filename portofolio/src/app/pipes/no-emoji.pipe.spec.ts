import { NoEmojiPipe } from './no-emoji.pipe';

describe('NoEmojiPipe', () => {
  it('create an instance', () => {
    const pipe = new NoEmojiPipe();
    expect(pipe).toBeTruthy();
  });
});
