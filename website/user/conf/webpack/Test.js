'use strict';

/**
 * Default test configuration.
 */
const WebpackBaseConfig = require('./Base');
const webpack = require('webpack');

class WebpackTestConfig extends WebpackBaseConfig {

	constructor() {
		super();
		this.config = {
			devtool: 'inline-source-map',
			externals: {
				cheerio: 'window',
				'react/lib/ExecutionEnvironment': true,
				'react/addons': true,
				'react/lib/ReactContext': true
			},
			module: {
				rules: [
					{
						test: /\.min\.css$/,
						loader: 'null-loader'
					},
					{
						test: /^.((?!min).)*\.css$/,
						use: [
							'style',
							'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]'
						]
					},
					{
						test: /\.(sass|scss|less|styl|png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
						loader: 'null-loader'
					},
					{
						test: /\.json$/,
						loader: 'json'
					},
					{
						test: /\.(js|jsx)$/,
						loader: 'babel?presets[]=es2015,presets[]=react,presets[]=survivejs-kanban',
						include: [].concat(
							this.includedPackages,
							[
								this.srcPathAbsolute,
								this.testPathAbsolute
							]
						)
					}
				]
			},
			plugins: [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': '"test"'
				})
			]
		};
	}

	/**
	 * Set the config data.
	 * Will remove the devServer config value as we do not need it in test environments
	 * This function will always return a new config
	 * @param {Object} data Keys to assign
	 * @return {Object}
	 */
	set config(data) {

		const baseSettings = this.defaultSettings;
		delete baseSettings.devServer;
		this._config = Object.assign({}, baseSettings, data);
	}

	/**
	 * Get the global config
	 * @param {Object} config Final webpack config
	 */
	get config() {
		return super.config;
	}

	/**
	 * Get the environment name
	 * @return {String} The current environment
	 */
	get env() {
		return 'test';
	}
}

module.exports = WebpackTestConfig;
