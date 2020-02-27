const response = require('../Helpers/httpResponse');
//const validate = require ('../Helpers/validate');

test('should receive three arguments, convert them into an object and return that object', () =>{
    const text = response(200, 'successful', ['gift', 'banda']);
    expect(text).toStrictEqual({ status: 200, message: 'successful', data: [ 'gift', 'banda' ] });
});

test('should receive three arguments, convert them into an object and return that object', () =>{
    const text1 = response(200, 'successful', []);
    expect(text1).toStrictEqual({ status: 200, message: 'successful', data:[] })
});

test('should receive two arguments, convert them into an object and return that object', () =>{
    const text2 = response(200, 'successful');
    expect(text2).toStrictEqual({ status: 200, message:'successful', data:[]})
});

