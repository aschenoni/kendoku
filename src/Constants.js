import connect from './Connect';

class Constants {
	constructor () {
		this.loadResources();
	}

	loadResources () {
		this.load('GameBoard');
	}

	load(assetPath, cb) {
		//resources have to be loaded and then loaded again. 
		//So we're doing cc.loader.loadRes twice :(
		//Need to investigate this in a build
		cc.loader.loadRes(assetPath, () => {
			cc.loader.loadRes(assetPath, (err, prefab) => {
				this[assetPath] = prefab; 
			})
		});
	}
}

export default connect(Constants);