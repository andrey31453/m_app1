// не переписывать
// данный файл сгенерирован автоматически
const src = path.join(__dirname, 'src/')

module.exports = {
	plugins: [
		new module_federation({
      name: 'app1',
      filename: 'remote_entry.js',
      exposes: {
        './App11': src + 'App11',
      },
			exposes: {
			},
			remotes: {
			},
      shared: {
				'react': { singleton: true },
        'react-dom': { singleton: true },
				
      },
    }),
	],
}