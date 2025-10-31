#!/bin/bash

# Pre-deployment validation script
# Run this before deploying to production

set -e  # Exit on any error

echo "🚀 Starting pre-deployment validation..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_info() {
    echo -e "ℹ️  $1"
}

# Check 1: Git status
echo "📋 Checking git status..."
if [[ -n $(git status -s) ]]; then
    print_warning "You have uncommitted changes"
    git status -s
    echo ""
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    print_success "Working directory clean"
fi
echo ""

# Check 2: Branch check
echo "🌿 Checking git branch..."
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
    print_warning "You are on branch: $CURRENT_BRANCH (not main)"
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    print_success "On main branch"
fi
echo ""

# Check 3: Pull latest changes
echo "⬇️  Pulling latest changes..."
git pull origin $CURRENT_BRANCH || true
echo ""

# Check 4: Install dependencies
echo "📦 Installing dependencies..."
npm ci
print_success "Dependencies installed"
echo ""

# Check 5: Linting
echo "🔍 Running ESLint..."
if npm run lint; then
    print_success "Linting passed"
else
    print_error "Linting failed"
    exit 1
fi
echo ""

# Check 6: Type checking
echo "📝 Running type check..."
if npm run type-check; then
    print_success "Type check passed"
else
    print_error "Type check failed"
    exit 1
fi
echo ""

# Check 7: Unit tests
echo "🧪 Running unit tests..."
if npm run test:unit; then
    print_success "Unit tests passed"
else
    print_error "Unit tests failed"
    exit 1
fi
echo ""

# Check 8: Build
echo "🏗️  Building production bundle..."
if npm run build; then
    print_success "Build successful"
else
    print_error "Build failed"
    exit 1
fi
echo ""

# Check 9: Security audit
echo "🔒 Running security audit..."
if npm audit --audit-level=moderate; then
    print_success "No security vulnerabilities found"
else
    print_warning "Security vulnerabilities detected (review recommended)"
fi
echo ""

# Check 10: Environment variables
echo "🔐 Checking environment variables..."
if [ -f .env.local ]; then
    print_success ".env.local found"
else
    print_warning ".env.local not found (using defaults)"
fi
echo ""

# Summary
echo "════════════════════════════════════════════════"
echo "✅ PRE-DEPLOYMENT VALIDATION COMPLETE"
echo "════════════════════════════════════════════════"
echo ""
print_success "All checks passed!"
echo ""
echo "Next steps:"
echo "  1. Review the changes: git log --oneline -5"
echo "  2. Push to repository: git push origin $CURRENT_BRANCH"
echo "  3. Monitor CI/CD pipeline in GitHub Actions"
echo "  4. Deploy when all checks pass"
echo ""
echo "To deploy now:"
echo "  • Vercel: vercel --prod"
echo "  • Netlify: netlify deploy --prod"
echo "  • Manual: Follow your hosting provider's instructions"
echo ""
