# Xolyd Next.js Starter Kit

The Xolyd Next.js Starter Kit is a resource developed by Xolyd, designed to accelerate the development of your projects. It provides a powerful set of features and industry-standard tools to ensure a robust foundation for building high-quality web applications.

## Key Features

- **Next.js 13.4:** Benefit from the latest version of Next.js, a minimalistic framework for server-rendered React applications.
- **Eslint + Prettier:** Integrated with Eslint and Prettier to keep your code clean, maintainable, and consistent.
- **Tailwind CSS:** Utilize the utility-first CSS framework Tailwind CSS for rapid UI development.
- **Commitizen:** An implementation of conventional commits specification for commit message formatting that facilitates collaboration.

## Getting Started

Follow these steps to create a new project using the Xolyd Next.js Starter Kit.

### Prerequisites

Ensure that you have Node.js installed on your system. This is required to manage your project's dependencies.

### Project Setup

Clone the Xolyd Next.js Starter Kit repository and navigate into your project folder:

```bash
gh repo clone hspotted/xolyd-next-template [project-name]
cd [project-name]
```

Install the project's dependencies:

```bash
npm install
```

To start the development server:

```bash
npm run dev
```

### Commitizen Setup

To ensure consistent commit messages, Xolyd uses Commitizen.

To configure Commitizen globally on your machine, run:

```bash
npm install --global commitizen
```

After that, you can make commits using:

```bash
git add .
cz
git push
```

## Conclusion

The Xolyd Next.js Starter Kit provides a comprehensive platform for developers to kick-start their Next.js projects with a solid foundation of best practices, latest features, and powerful tools. Start building your Next.js applications with Xolyd today.
