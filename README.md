# Oh-hyeon's personal page

Deployed to GitHub Pages via [Zensical](https://github.com/zensical/zensical).

## Setup

```bash
uv sync --dev
uv run pre-commit
```

## Usage

| Command | Description |
|---|---|
| `make docs-preview` | Local preview at localhost:8000 |
| `make pre-commit-update` | Update hook versions |

## How it works

- Push to `main` → auto-deploys via GitHub Actions
- On commit: linting (ruff, markdownlint, gitleaks), `modified:` date in front matter auto-updated
