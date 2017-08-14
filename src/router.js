/**
 * @file
 *
 * @author sqliang
 */
import {router} from 'san-router';

import routes from './routes';

routes.forEach(item => {
    router.add({
        ...item,
        target: '#main'
    });
});

export default router;