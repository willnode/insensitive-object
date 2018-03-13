import test from 'ava';

const insObject = require('.');

const obj = {
	Accept: '*/*',
	'user-AGENT': 'Mozilla/5.0',
	cOOKIE: 'SID=123;'
};

test('test methods', t => {
    t.deepEqual(insObject.get(obj, 'user-agent'), 'Mozilla/5.0');
    t.deepEqual(insObject.set(obj, 'user-agent', 'Googlebot'),
        { Accept: '*/*', 'user-agent': 'Googlebot', cOOKIE: 'SID=123;' }
    );
    t.deepEqual(insObject.assign(obj, { accept: 'application/json', 'accept-encoding': 'gzip' }),
        { accept: 'application/json', 'user-agent': 'Googlebot', cOOKIE: 'SID=123;', 'accept-encoding': 'gzip' }
    );
    t.deepEqual(insObject.remove(obj, 'cookie'),
        { accept: 'application/json', 'user-agent': 'Googlebot', 'accept-encoding': 'gzip' }
    );
});
