/**
 * @file
 *
 * @author sqliang
 */

// style
//require('font-awesome/css/font-awesome.min.css');
import 'normalize.css/normalize.css';
import 'san-mui/lib/index.css';
import './main.css';
import './router';
import App from './App.san';

const appTitle = 'XXX管理系统';
const menus = [
    {
        name: 'Home',
        url: '/',
        icon: 'fa fa-list-alt'
    },
    {
        name: 'About',
        url: '/about',
        icon: 'fa fa-list-alt'
    }
];
// app
new App({
    data: {
        appTitle,
        menus
    }
}).attach(document.getElementById('app'));

