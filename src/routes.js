/**
 * @file routes config arr
 * 
 * @author
 */

import Home from './pages/Home/Home.san';
import About from './pages/About/About.san';

export default [
    {
        rule: '/',
        Component: Home
    },
    {
        rule: '/about',
        Component: About
    }
];