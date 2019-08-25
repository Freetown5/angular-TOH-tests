import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  // Isolated Test
  it('should display weak if strength is 5', () => {
    // class from component used to create pipe
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  })

  // Isolated Test
  it('should display strong if strength is 15', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(15)).toEqual('15 (strong)');
  })

  // Isolated Test
  it('should display unbelievable if strength is 25', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(25)).toEqual('25 (unbelievable)');
  })

  // scaffolded default test
  xit('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });
});
