import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads with correct title and hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Boston Plumbing/)
    await expect(page.getByRole('heading', { name: /Boston's Most Trusted Plumbers/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Get a Free Quote/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /View Our Services/i })).toBeVisible()
  })

  test('Call Now button has tel: href', async ({ page }) => {
    await page.goto('/')
    const callBtn = page.locator('a[href*="tel:"]').first()
    await expect(callBtn).toBeVisible()
    const href = await callBtn.getAttribute('href')
    expect(href).toContain('617')
  })

  test('footer has copyright and license', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await expect(page.locator('text=© 2026 Boston Plumbing')).toBeVisible()
    await expect(page.locator('text=BP-MA-00421')).toBeVisible()
  })
})

test.describe('Emergency banner', () => {
  test('shows and can be dismissed', async ({ page }) => {
    await page.goto('/')
    const banner = page.locator('text=24/7 Emergency Plumbing')
    await expect(banner).toBeVisible()
    // Dismiss it
    await page.locator('button[aria-label="Dismiss emergency banner"]').click()
    await expect(banner).not.toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('navigates to About page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'About' }).first().click()
    await expect(page).toHaveURL('/about')
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible()
  })

  test('navigates to Services page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Services' }).first().click()
    await expect(page).toHaveURL('/services')
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible()
  })

  test('navigates to Gallery page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Gallery' }).first().click()
    await expect(page).toHaveURL('/gallery')
    await expect(page.getByRole('heading', { name: 'Our Work' })).toBeVisible()
  })

  test('navigates to Contact page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL('/contact')
    await expect(page.getByRole('heading', { name: 'Get in Touch' })).toBeVisible()
  })
})

test.describe('Gallery filter', () => {
  test('filter buttons are visible', async ({ page }) => {
    await page.goto('/gallery')
    await expect(page.getByRole('button', { name: 'All' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Water Heaters' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Drain Work' })).toBeVisible()
  })

  test('clicking a filter changes active state', async ({ page }) => {
    await page.goto('/gallery')
    const heatersBtn = page.getByRole('button', { name: 'Water Heaters' })
    await heatersBtn.click()
    // After clicking, the button should have the active gold background class
    await expect(heatersBtn).toHaveClass(/bg-gold/)
  })
})

test.describe('404 page', () => {
  test('renders branded not-found page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist')
    await expect(page.locator('text=404')).toBeVisible()
    await expect(page.locator('text=Page Not Found')).toBeVisible()
    await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible()
  })
})
