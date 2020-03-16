install:
	npm install
start:
	node bin/brain-games.js
start5:
	node bin/brain-even.js
start6:
	node bin/brain-calc.js
start7:
	node bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
