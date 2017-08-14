/**
 * @file
 *
 * @author sqliang
 */

// style
require('font-awesome/css/font-awesome.min.css');
require('./main.css');

import router from './router';
import App from './App.san';

const titleName = 'sqliang';

// app
new App({
    data: {
        titleName,
        router
    }
}).attach(document.getElementById('app'));

