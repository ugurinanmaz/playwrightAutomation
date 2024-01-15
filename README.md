# #playwrightAutomation

## Overview

This repository contains automation scripts and tests using Playwright for web application testing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test Structure](#test-structure)
- [Configuration](#configuration)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ugurinanmaz/playwrightAutomation.git

2. Navigate to the project directory:

   ```bash
    cd playwrightAutomation

3. Install dependencies:

   ```bash
    npm install

# Playwright Commands

## Running Tests

Run all tests:
`npm run test`

Run tests in a specific file:
`npx playwright test path/to/your/testfile.spec.js` 

Run tests in headless mode:
`npx playwright test --headed=false` 

Run tests with a specific browser:
`npx playwright test --browser=chromium` 

## Generating Test Reports

Generate HTML test report:
`npx playwright test --reporter=list` 

## Recording Tests

Record a test in headless mode:
`npx playwright test --record` 

Record a test with a specific project:
`npx playwright test --project=myProject --record` 

## Debugging Tests

Run tests in debug mode:
`npx playwright test --debug` 

## Configuring Environments

Run tests with a specific environment:
`npx playwright test --env=staging` 

## Additional Commands

List all available commands:
`npx playwright --help` 
