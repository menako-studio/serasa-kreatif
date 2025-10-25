import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    // Check hero section
  await expect(page.getByRole('heading', { name: /from thinking to creating|from thinking to creating/i })).toBeVisible()
    
    // Check navigation
  await expect(page.getByRole('link', { name: /portofolio|portofolio kami|portofolio/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /layanan|layanan kami|layanan/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /tentang|tentang kami|tentang/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /kontak|kontak kami|kontak/i })).toBeVisible()
  })

  test('should navigate to work page', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
  await page.getByRole('link', { name: /portofolio|portofolio kami|portofolio/i }).first().click()
  await expect(page).toHaveURL(/.*work/)
  await expect(page.getByRole('heading', { name: /portofolio kami|portofolio kami|portofolio/i })).toBeVisible()
  })
})

test.describe('Contact Form', () => {
  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    
    // Fill form
  await page.getByLabel(/nama lengkap|nama/i).fill('Test User')
  await page.getByLabel(/email/i).fill('test@example.com')
  await page.getByLabel(/nomor telepon|telepon|phone/i).fill('+62 812 3456 7890')
  await page.getByLabel(/ringkasan proyek|project brief|ringkasan/i).fill('Ini pesan uji')
    
    // Submit
  await page.getByRole('button', { name: /kirim pesan|kirim/i }).click()
    
    // Check success message (adjust based on actual implementation)
  await expect(page.getByText(/terima kasih|terima kasih!/i)).toBeVisible({ timeout: 5000 })
  })

  test('should show validation errors for empty required fields', async ({ page }) => {
    await page.goto('http://localhost:3000/contact')
    
    // Try to submit empty form
  await page.getByRole('button', { name: /kirim pesan|kirim/i }).click()
    
    // Browser validation should prevent submission
  const nameInput = page.getByLabel(/nama lengkap|nama/i)
    await expect(nameInput).toHaveAttribute('required')
  })
})
