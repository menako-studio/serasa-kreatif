import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('http://localhost:3000')

    // Check hero section
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
    await expect(heading).toContainText(/turning content/i)
    await expect(heading).toContainText(/revenue/i)

    // Check navigation links are attached to the document
    await expect(page.getByRole('link', { name: /portfolio/i }).first()).toBeAttached()
    await expect(page.getByRole('link', { name: /services/i }).first()).toBeAttached()
    await expect(page.getByRole('link', { name: /about/i }).first()).toBeAttached()
    await expect(page.getByRole('link', { name: /contact/i }).first()).toBeAttached()
  })

  test('should navigate to work page', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await page
      .getByRole('link', { name: /portfolio/i })
      .first()
      .click()
    await expect(page).toHaveURL(/.*portfolio/)
    await expect(page.getByRole('heading', { name: /portfolio/i })).toBeVisible()
  })
})

test.describe('Contact Form', () => {
  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')

    // Fill form
    await page.getByLabel(/full name|nama/i).fill('Test User')
    await page.getByLabel(/email/i).fill('test@example.com')
    await page.getByLabel(/phone number|phone/i).fill('+62 812 3456 7890')
    await page.getByLabel(/project summary|message/i).fill('Ini pesan uji')

    // Submit
    await page.getByRole('button', { name: /send message|send/i }).click()

    // Check success message
    await expect(page.getByText(/thank you|terima kasih/i)).toBeVisible({ timeout: 15000 })
  })

  test('should show validation errors for empty required fields', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')

    // Try to submit empty form
    await page.getByRole('button', { name: /send message|send/i }).click()

    // Browser validation should prevent submission
    const nameInput = page.getByLabel(/full name|nama/i)
    await expect(nameInput).toHaveAttribute('required')
  })
})
