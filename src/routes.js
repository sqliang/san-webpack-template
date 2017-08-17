/**
 * @file routes config arr
 * 
 * @author sqliang
 */

import Home from './pages/Home/Home.san';
import About from './pages/About/About.san';
import List from './pages/List/List.san';
import Add from './pages/Add/Add.san';
import Edit from './pages/Edit/Edit.san';

export default [
    {
        rule: '/',
        Component: Home
    },
    {
        rule: '/about',
        Component: About
    },
    {
        rule: '/list',
        Component: List
    },
    {
        rule: '/list/tag/:tag_id',
        Component: List
    },
    {
        rule: '/add',
        Component: Add
    },
    {
        rule: '/edit/:id',
        Component: Edit
    }
];