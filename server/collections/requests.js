import bookshelf from '../bookshelf';
import request from '../models/request';

export default bookshelf.Collection.extend({
	model: request
});

