import test from 'ava';

const inso = require('.');

const obj = {
	Accept: '*/*',
	'user-AGENT': 'Mozilla/5.0',
	cOOKIE: 'SID=123;'
};

test('test methods', t => {
    t.deepEqual(inso.get(obj, 'user-agent'), 'Mozilla/5.0');
    t.deepEqual(inso.set(obj, 'user-agent', 'Googlebot'),
        { Accept: '*/*', 'user-agent': 'Googlebot', cOOKIE: 'SID=123;' }
    );
    t.deepEqual(inso.assign(obj, { accept: 'application/json', 'accept-encoding': 'gzip' }),
        { accept: 'application/json', 'user-agent': 'Googlebot', cOOKIE: 'SID=123;', 'accept-encoding': 'gzip' }
    );
    t.deepEqual(inso.remove(obj, 'cookie'),
        { accept: 'application/json', 'user-agent': 'Googlebot', 'accept-encoding': 'gzip' }
    );
});
