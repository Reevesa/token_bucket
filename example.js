/**
 * Created by koala on 2016/9/14.
 */

'use strict';

const Limit = require('./');

const limiter = new Limit();

// 模拟请求（300毫秒一次）
setInterval(() => {
    limiter.check((err, data) => {
        if (err) {
            console.log('err', err);
        } else {
            console.log('data', data);
        }
    });
}, 300);

// 模拟请求（550毫秒一次）
setInterval(() => {
    limiter.check((err, data) => {
        if (err) {
            console.log('err', err);
        } else {
            console.log('data', data);
        }
    });
}, 550);