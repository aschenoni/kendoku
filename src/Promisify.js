const Promisify = (originalFunction) => {
	return (...args) => {
		return new Promise((resolve, reject) => {
			originalFunction(...args, (err, result) => {
				err ? reject(err) : resolve(result);
			});
		});
	};
}

export default Promisify;