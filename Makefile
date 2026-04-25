
pre-commit-install:
	uv run pre-commit install

pre-commit-run:
	uv run pre-commit run --all-files

pre-commit-update: pre-commit-install
	uv run pre-commit autoupdate

pre-commit: pre-commit-update pre-commit-run

docs-preview:
	uv run zensical serve --open
