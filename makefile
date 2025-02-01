.PHONY: test
start:
	npm run start:dev
lint:
	npm run lint
test:
	make lint && npm run test && npm run build
