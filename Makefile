IMAGE_NAME=vite-ci-image

.PHONY: build test

build:
	docker build -t $(IMAGE_NAME) .

test: build
	docker run --rm \
		-v $(PWD):/app \
		-w /app \
		$(IMAGE_NAME) \
		sh -c "npm install && npm run prettier:check && npm run lint && npm test"

