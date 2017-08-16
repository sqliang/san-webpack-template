/**
 * @file
 *
 * @author sqliang
 */

// style
import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css/normalize.css';
import 'san-mui/lib/index.css';
import './main.css';
//
import router from './router';
import App from './App.san';

// app
new App({
    data: {
        router
    }
}).attach(document.getElementById('app'));

