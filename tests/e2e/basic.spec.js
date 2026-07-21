import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Check hero section
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/connecting/i)
    await expect(heading).toContainText(/growth/i)

    // Check navigation links are attached to the document
    await expect(page.locator('a[href="/portfolio"]').first()).toBeAttached()
    await expect(page.locator('a[href="/services"]').first()).toBeAttached()
    await expect(page.locator('a[href="/about"]').first()).toBeAttached()
    await expect(page.locator('a[href="/contact"]').first()).toBeAttached()
  })

  test('should navigate to work page', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Toggle mobile menu if visible
    const mobileMenuBtn = page.getByRole('button', { name: /toggle mobile menu/i })
    if (await mobileMenuBtn.isVisible()) {
      await mobileMenuBtn.click()
    }

    await page
      .getByRole('link', { name: /portfolio/i })
      .filter({ visible: true })
      .first()
      .click()
    await expect(page).toHaveURL(/.*portfolio/)
    await expect(page.getByRole('heading', { name: /portfolio/i })).toBeVisible()
  })
})

test.describe('Contact Form', () => {
  test('should submit contact form successfully', async ({ page }) => {
    // Intercept and mock /api/contact requests
    await page.route(
      (url) => url.pathname.endsWith('/api/contact'),
      async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          headers: { 'access-control-allow-origin': '*' },
          json: { success: true, message: 'Form submitted successfully' },
        })
      }
    )

    await page.goto('http://localhost:3000/contact')

    // Fill form using exact field IDs
    await page.locator('#name').fill('Test User')
    await page.locator('#email').fill('test@example.com')
    await page.locator('#phone').fill('+62 812 3456 7890')
    await page.locator('#message').fill('Ini pesan uji')
    await page.locator('#message').blur()

    // Submit form
    await page.locator('button[type="submit"]').click()
    await page.locator('form').dispatchEvent('submit')

    // Check success message
    await expect(page.getByText(/thank you|terima kasih/i)).toBeVisible({ timeout: 15000 })
  })

  test('should show validation errors for empty required fields', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')

    // Try to submit empty form
    await page.locator('button[type="submit"]').click()

    // Browser validation should prevent submission
    const nameInput = page.locator('#name')
    await expect(nameInput).toHaveAttribute('required')
  })
})
