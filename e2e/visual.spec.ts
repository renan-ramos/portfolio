import { expect, test } from '@playwright/test'

const locales = ['en', 'br']
const pages = ['', '/work', '/blog']

for (const locale of locales) {
  for (const path of pages) {
    const name = `${locale}${path.replace('/', '-') || '-home'}`

    test(`page ${name}`, async ({ page }) => {
      await page.goto(`/${locale}${path}`)
      await page.evaluate(() => document.fonts.ready)
      await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true })
    })
  }
}

// The refactor replaces these components, so capture them open too.
test('language select open', async ({ page }) => {
  await page.goto('/en')
  await page.getByRole('combobox').click()
  await expect(page.getByRole('listbox')).toBeVisible()
  await expect(page).toHaveScreenshot('en-language-select.png')
})

test('contact drawer open', async ({ page }) => {
  await page.goto('/en')
  await page.getByRole('button', { name: "Let's talk" }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page).toHaveScreenshot('en-contact-drawer.png')
})
