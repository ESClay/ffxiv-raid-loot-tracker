/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
//const path = require("path");
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = () => {
	console.log("NODE_ENV: ", NODE_ENV);

	return {
		entry: {
			"app": ["core-js", "./src/index.tsx"]
		},
		devtool: NODE_ENV === "development" ? "inline-source-map" : false,
		mode: NODE_ENV,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader:	"babel-loader"
					,
					options: {
						cacheDirectory: true,
						presets: ["@babel/react", "@babel/typescript"],
						plugins: ["react-hot-loader/babel"]
					},				
					exclude: /node_modules/,
				},
				{
					test: /\.scss$/,
					loader: "sass-loader"
				},
			],
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						chunks: "all",
					},
				},
			},
		},
		plugins: [		
			new webpack.DefinePlugin({
				NODE_ENV: JSON.stringify(NODE_ENV)
			}),
			new ForkTsCheckerWebpackPlugin(), 
			new webpack.NamedModulesPlugin(), 
			new HtmlWebpackPlugin()
		],
		resolve: {
			extensions: [ ".tsx", ".ts", ".js" ],
			alias: {
				"react-dom": "@hot-loader/react-dom",
			},
		},
		output: {
			filename: "[name].bundle.js",
			path: path.resolve(__dirname, "dist"),
		},	
	// devServer: {
	// 	port: "8085",
	// 	open: (NODE_ENV == "development"),
	// 	hot: true,
	// 	index: "/src/index.tsx",
	// 	contentBase: "./dist"
	// }
	};
};
if (NODE_ENV == "production") {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				// don't show unreachable variables etc
				warnings:     false,
				drop_console: true,
				unsafe:       true
			}
		})
	);
}