import bookshelf from '../bookshelf';
import order from '../models/order';

export default bookshelf.Collection.extend({
	model: order
});

