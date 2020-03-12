install:
	npm install
start:
	node bin/brain-games.js
start5:
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
