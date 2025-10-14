# Contributing to Next.js Template

Thank you for your interest in contributing to the [Next.js Template](https://github.com/sjmitch-git/nextjs-template)! This project is a lightweight, TypeScript-based Next.js template designed to help developers bootstrap modern, scalable web applications with Tailwind CSS and best practices. Your contributions can make it even better for the community.

## How to Contribute

### Reporting Bugs

- Open an issue at [github.com/sjmitch-git/nextjs-template/issues](https://github.com/sjmitch-git/nextjs-template/issues/new?assignees=&labels=bug&template=bug_report.md&title=bug%3A%20).
- Use the provided bug report template.
- Include a clear description, steps to reproduce, expected vs. actual behavior, and any relevant screenshots or code snippets.

### Suggesting Features

- Submit a feature request at [github.com/sjmitch-git/nextjs-template/issues](https://github.com/sjmitch-git/nextjs-template/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=feat%3A%20).
- Explain the feature, its benefits, and potential implementation details.

### Submitting Pull Requests (PRs)

1. Fork the repository: [github.com/sjmitch-git/nextjs-template/fork](https://github.com/sjmitch-git/nextjs-template/fork).
2. Clone your fork: After forking the repository, clone it to your local machine using `git clone https://github.com/<your-username>/nextjs-template.git`, where `<your-username>` is your GitHub username.
3. Create a branch: `git checkout -b feature/your-feature-name` or `fix/your-fix-name`.
4. Make changes and commit with clear messages (e.g., `feat: add new component` or `fix: resolve TypeScript error`).
5. Run checks:
    - Format code: `npm run format`.
    - Lint: `npm run lint`.
    - Test (if applicable): `npm run test`.
6. Push to your fork: `git push origin feature/your-feature-name`.
7. Open a PR, referencing related issues (e.g., `Fixes #123`).

## Development Setup

1. Clone the repo: `git clone https://github.com/sjmitch-git/nextjs-template.git`.
2. Install dependencies: `npm install`.
3. Run locally: `npm run dev` (visit `http://localhost:3000`).
4. Build for production: `npm run build`.

### Prerequisites

- Node.js (v18 or higher recommended).
- npm or yarn.
- Familiarity with Next.js, TypeScript, and Tailwind CSS.

## Coding Standards

- **TypeScript**: Use explicit types, especially for props (e.g., `level: 1 | 2 | 3 | 4 | 5 | 6` for `Section` component).
- **Styling**: Use Tailwind CSS classes in `app/globals.css` or component-specific classes.
- **Linting**: Follow ESLint and Prettier rules (`npm run lint` and `npm run format`).
- **Commits**: Use [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`, `docs:`).
- **Testing**: Add tests for new features using Jest (if set up) or ensure existing tests pass.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable components like `Section` and `TableOfContents`.
- `app/globals.css`: Tailwind CSS styles, including external link styles (`a[target="_blank"]`).

## Code of Conduct

We follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you agree to uphold it.

## Questions?

- Start a discussion: [github.com/sjmitch-git/nextjs-template/discussions](https://github.com/sjmitch-git/nextjs-template/discussions).
- Open an issue: [github.com/sjmitch-git/nextjs-template/issues](https://github.com/sjmitch-git/nextjs-template/issues).
- Contact: Reach out via GitHub Issues or Discussions.

Thank you for contributing!
