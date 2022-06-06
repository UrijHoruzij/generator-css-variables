import fs from 'fs';

const jsonToCssVariables = (json, options) => {
	options = options || {};
	let output = `.root{${options.pretty ? '\n' : ''}`;
	for (let key in json) {
		let value = json[key];
		output += `${options.pretty ? '\t' : ''}--${key}: ${value};${options.pretty ? '\n' : ''}`;
	}
	output += '}';
	return output;
};

const themesArray = (themes, options = { path: '' }) => {
	for (let i = 0; i < themes.length; i++) {
		let json = themes[i];
		let cssVariables = jsonToCssVariables(json, options);
		fs.writeFile(`${process.cwd()}/${options.path}${json['name']}.module.css`, cssVariables, (err) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log('Success');
		});
	}
	let contentJS = ``;
	for (let i = 0; i < themes.length; i++) {
		let json = themes[i];
		contentJS += `export { default as ${json['name']} } from "./${json['name']}.module.css";\n`;
	}
	fs.writeFile(`${process.cwd()}/${options.path}index.js`, contentJS, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log('Success JS');
	});
};
export default themesArray;
