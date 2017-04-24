var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Kolby';
    var text = 'Hi';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Kolby';
    var latitude = '1';
    var longitude = '1';

    var url = generateLocationMessage(from, latitude, longitude);

    expect(url.createdAt).toBeA('number');
    expect(url).toInclude({
      from: 'Kolby',
      url: 'https://www.google.com/maps?q=1,1'
    });
  });
});
