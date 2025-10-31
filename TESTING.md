# Testing & Quality Assurance

## 🎯 Overview

Project ini menggunakan sistem testing otomatis multi-layer untuk memastikan kualitas code dan mencegah bugs di production.

## 🔄 Automated Testing Flow

### 1. Pre-Commit Hooks (Husky)

**Kapan:** Setiap kali `git commit`  
**Apa yang dicek:**

- Lint dan format code yang di-stage
- Type checking TypeScript/JSX
- Commit message format validation

**File terkait:**

- `.husky/pre-commit` - Pre-commit hook script
- `.husky/commit-msg` - Commit message validation
- `.lintstagedrc.json` - Lint-staged configuration
- `commitlint.config.js` - Commit message rules

### 2. GitHub Actions CI/CD

**Kapan:** Setiap `push` atau `pull request`  
**Apa yang dicek:**

- ESLint checks (code quality)
- Type checking
- Unit tests (Vitest)
- E2E tests (Playwright)
- Production build test
- Security audit (npm audit)

**File terkait:**

- `.github/workflows/ci.yml` - CI/CD pipeline configuration

### 3. Manual Validation

**Kapan:** Sebelum deploy ke production  
**Apa yang dicek:**

- Semua automated checks
- Manual QA testing
- Performance metrics

**File terkait:**

- `scripts/pre-deploy.sh` - Pre-deployment validation script
- `DEPLOYMENT.md` - Deployment checklist

## 🛠️ Available Scripts

### Development

```bash
# Start dev server
npm run dev

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix
```

### Testing

```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run E2E tests
npm run test:e2e

# Run all checks (lint + type + test)
npm run test:all
```

### Pre-Deployment

```bash
# Quick pre-deploy check
npm run pre-deploy

# Full validation (recommended before production)
npm run validate

# Run pre-deploy script with detailed output
./scripts/pre-deploy.sh
```

### Code Quality

```bash
# Type checking
npm run type-check

# Lint staged files (used by pre-commit hook)
npm run lint:staged

# Format code
npx prettier --write .
```

## 📝 Writing Tests

### Unit Tests (Vitest)

Location: `tests/unit/`

```javascript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

### E2E Tests (Playwright)

Location: `tests/e2e/`

```javascript
import { test, expect } from '@playwright/test'

test('homepage loads successfully', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page).toHaveTitle(/Serasa Kreatif/)
})
```

## 🚫 Preventing Bad Commits

### Pre-commit akan GAGAL jika:

- ❌ ESLint errors ditemukan
- ❌ Type errors ada
- ❌ Code formatting tidak sesuai
- ❌ Commit message format salah

### CI/CD akan GAGAL jika:

- ❌ Tests tidak pass
- ❌ Build production gagal
- ❌ Security vulnerabilities (moderate+)
- ❌ Linting errors

## 📋 Commit Message Rules

Format: `type(scope): description`

**Valid types:**

- `feat`: Fitur baru
- `fix`: Bug fix
- `docs`: Dokumentasi
- `style`: Formatting
- `refactor`: Refactoring code
- `perf`: Performance improvement
- `test`: Test changes
- `chore`: Maintenance
- `ci`: CI/CD changes
- `build`: Build system changes

**Examples:**

```bash
✅ feat: add team member section
✅ fix: correct email address in footer
✅ docs: update testing documentation
❌ added new feature (rejected - no type)
❌ Fix bug (rejected - wrong case)
```

## 🔧 Troubleshooting

### Pre-commit hooks tidak berjalan?

```bash
# Reinstall hooks
npm run prepare

# Make hooks executable
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# Test hook manually
.husky/pre-commit
```

### Skip pre-commit hooks (NOT RECOMMENDED)

```bash
# Only use in emergency
git commit --no-verify -m "emergency fix"
```

### CI failing but local tests pass?

```bash
# Clear cache
rm -rf .next node_modules
npm ci
npm run validate
```

### Type check errors?

```bash
# Run type check with verbose output
npm run type-check

# Check tsconfig.json configuration
```

## 📊 Test Coverage

Untuk check test coverage:

```bash
# Run tests with coverage
npm run test:unit -- --coverage

# View coverage report
open coverage/index.html
```

## 🎯 Quality Gates

**Minimum Requirements untuk Production:**

- ✅ Linting: 0 errors
- ✅ Type checking: 0 errors
- ✅ Unit tests: 100% pass
- ✅ Build: Success
- ✅ Security: No moderate+ vulnerabilities

## 📚 Resources

- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Rules](https://eslint.org/docs/rules/)

## 🤝 Contributing

Sebelum submit PR:

1. ✅ Run `npm run validate`
2. ✅ Pastikan semua tests pass
3. ✅ Update tests jika perlu
4. ✅ Follow commit message format
5. ✅ CI/CD pipeline harus hijau

## ⚡ Quick Reference

| Command                   | Purpose                           |
| ------------------------- | --------------------------------- |
| `npm run validate`        | Full validation sebelum deploy    |
| `npm run pre-deploy`      | Quick pre-deployment check        |
| `npm run test:all`        | Run all tests                     |
| `npm run lint:fix`        | Fix linting issues                |
| `./scripts/pre-deploy.sh` | Interactive pre-deploy validation |

---

**Remember:** Tests bukan hanya untuk mencari bugs, tapi untuk memberikan confidence bahwa code kita bekerja dengan baik! 🚀
