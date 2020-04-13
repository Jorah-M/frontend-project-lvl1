install:
	npm install
startEven:
	node bin/brain-even.js
startCalc:
	node bin/brain-calc.js
startGcd:
	node bin/brain-gcd.js
startProgression:
	node bin/brain-progression.js
startPrime:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
