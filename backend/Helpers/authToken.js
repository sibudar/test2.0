const jwt = require ('jsonwebtoken'); //import jwt
const fs = require ('fs');
// const privateKey = fs.readFileSync ('./private.pem', 'utf8');


let text = `MIIEpAIBAAKCAQEAyVTQ9QxfutaYXKBbYfZbH2vhIWoIPEjAFSbsy1PZoIcclUQR
hJ8t2m7v47M8eEyYd7EvXTNdoN6CDs0DoNC9KESATZV5SUVr7sk9pOcMrm0VryAd
h7hQbbHWqyKmOehCt1JdX7gV2i5XnRb5qYQSyoB8sGdfR4SQ9q1XPRIpBP8RYXCP
WPmwnmtzYjfs+VVMp+ByNWgM8Qvyc3Z13tHKHWfTokbEbJJE0xfFG6CVFZy+T7uq
0UxhkWh8tekaDbfrIYtgC8HRHfRPcqvsN/pkJM0DIU4UNIf2TeLARa+iATNiF5IX
DeAAkIqoQL0tgt6S+8HIEPGiQ3gpGE56DON06QIDAQABAoIBAAvIxyJQwxmwjeJ+
EFs/jD3elqLaDflZWMTkLmAIXGik/+tMvKnCl3B9pdTyHMv9z77RxC/0XbqYy4wK
O/ghv7CnscrYwOyk/5hOdyk7zOY4xFgnzRKwmySQkDwcHxasnZsVWxnLMJxAsigj
vCFL9b2cn6/DnTQWclW996k/ct8z5DzodH/O+JyQl2MvLgjtf1OupbNZcjt4kMRP
GS5em5banlycUtPE0NAcS0QXleHLj5BXOp0AyD+PWfzhWcctiK7p+vmwXv6OVtlu
DIiTTOnsjoMq7skfVzRpjmAesllXBb1evwsrVK7cjYefEsVZ5DzOVLNU5Iug3HCf
RnftUAECgYEA6uWhJ9la1VpiYgEai4F61Rxs/MAQzmWVl0NQhPrczLCdRXfhmeBP
w1a4VkCD7FlZq/UuL4bSnU2JINL/enmrfZfdLdQgjY1VgPNki6v4Da9sqi+D17Wb
w863h/X29cukttFgUQdPO66bwsitoNVDsBqyf2hlFWC+rRPovoFA9WkCgYEA22s2
njRgoV6mTTCgXoZMs8unJ2CTd+BuVP1wDVsHR0VnK7blVlIW9Hop0ZmFK3I41kw3
3LXT6RSmZXsdgAsm3VuWlDVFY6t+JUUGYOfZZVNgUX0J597hf2SwxfJ8cgNHuSEO
glxc/dzHXMgamf8+84RCK3NSGP8xmuI/Wm5JE4ECgYEAmFelVTradlTQSc99b8zh
5SUyahoGzFWF1zyJFDW+zeIdndhKMIoSMRYlJ4tgBAFO7v9snNZL8kk/DlLJ7pzK
ZAICKJ7THfrz4VX5d7xofDexug5m65eVFkETNtKHAJK6mPbiCKs87/AmhQWx1gV6
iNRHv+ns5RiBka6/3A3oG0ECgYEAl+qIO0rqaG++1ozHTArSCl4DUlkkYQhLe56p
OSYASRE9WF/eM0DM0eHPGGahdC42OfE1cCOYH7WDa5mtGB0ggHxMKjsj2tk+kpFS
1D9SHjx24JShCiAfonNVjQfRr6KjwwKnKAzI+Z8ljRCikmLN9A5rPegvPE1by++/
i132TIECgYAiDd+OSokfZYi8mqjIoMI946+Hlb7lisb7CXksM69A+oWJrfkCwOMq
O3tExLbxtd7KZuAg1xH2thimIeT6tuCbCSAFGzr4EWCe7iavVzevHr98ivPLYXte
dyWl3YlvqO+SUuieGvHISlekblMO/4tcUscmKmo+FgkMroBsePcdEAfcgvkybjyh`

function generateToken(data) {
  //we need to do try-catch errors
  //create a token
  const token = jwt.sign(data, text, {
    algorithm: 'HS256',
    expiresIn: 120, //expires in 2 minutes
  });
  return token;
}

function verifyToken(token) {
  if(!token) {
    return 'No token provided.';
  }
  //verify token
  jwt.verify(token, privateKey, (err, data) => {
    if(err) {
      return 'Invalid token.';
    } else {
      return data;
    }
  });
}

module.exports = {generateToken, verifyToken};
