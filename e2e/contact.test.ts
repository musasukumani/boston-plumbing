import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('renders all required fields', async ({ page }) => {
    await expect(page.getByLabel(/Full Name/i)).toBeVisible()
    await expect(page.getByLabel(/Phone Number/i)).toBeVisible()
    await expect(page.getByLabel(/Email Address/i)).toBeVisible()
    await expect(page.getByLabel(/Service Needed/i)).toBeVisible()
    await expect(page.getByLabel(/Preferred Date/i)).toBeVisible()
  })

  test('shows validation errors when submitted empty', async ({ page }) => {
    await page.getByRole('button', { name: /Send Request/i }).click()
    await expect(page.locator('text=Full name is required')).toBeVisible()
    await expect(page.locator('text=Phone number is required')).toBeVisible()
    await expect(page.locator('text=Email is required')).toBeVisible()
  })

  test('shows email validation error for invalid email', async ({ page }) => {
    await page.getByLabel(/Email Address/i).fill('not-an-email')
    await page.getByRole('button', { name: /Send Request/i }).click()
    await expect(page.locator('text=Enter a valid email')).toBeVisible()
  })

  test('emergency checkbox is interactive', async ({ page }) => {
    const checkbox = page.locator('input[type="checkbox"]')
    await expect(checkbox).not.toBeChecked()
    await checkbox.check()
    await expect(checkbox).toBeChecked()
  })

  test('accepts valid form input without validation errors', async ({ page }) => {
    await page.getByLabel(/Full Name/i).fill('John Smith')
    await page.getByLabel(/Phone Number/i).fill('6175551234')
    await page.getByLabel(/Email Address/i).fill('john@example.com')
    await page.getByLabel(/Service Needed/i).selectOption('Drain Cleaning')
    // Set date to tomorrow
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dateStr = tomorrow.toISOString().split('T')[0]
    await page.getByLabel(/Preferred Date/i).fill(dateStr)

    // No validation errors should be visible on the fields we've filled
    await expect(page.locator('text=Full name is required')).not.toBeVisible()
    await expect(page.locator('text=Email is required')).not.toBeVisible()
  })

  test('FAQ accordion expands and collapses', async ({ page }) => {
    const firstQuestion = page.locator('text=Do you offer free estimates?')
    await expect(firstQuestion).toBeVisible()
    await firstQuestion.click()
    await expect(page.locator('text=all quotes are completely free')).toBeVisible()
    // Click again to collapse
    await firstQuestion.click()
    await expect(page.locator('text=all quotes are completely free')).not.toBeVisible()
  })
})
