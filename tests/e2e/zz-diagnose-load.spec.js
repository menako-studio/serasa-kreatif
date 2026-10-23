// TEMPORARY diagnostic — remove before merge. Logs which requests never finish on the homepage.
import { test } from '@playwright/test'

test('diag: pending requests on homepage', async ({ page }) => {
  test.setTimeout(90000)
  const project = test.info().project.name
  const pending = new Map()
  page.on('request', (r) => pending.set(r, Date.now()))
  page.on('requestfinished', (r) => pending.delete(r))
  page.on('requestfailed', (r) => {
    console.log(`DIAG[${project}] failed`, r.url().slice(0, 150), r.failure()?.errorText)
    pending.delete(r)
  })
  page.on('response', (r) => {
    if (r.status() >= 400) console.log(`DIAG[${project}] status ${r.status()}`, r.url().slice(0, 150))
  })
  page.on('console', (m) => {
    if (['error', 'warning'].includes(m.type())) console.log(`DIAG[${project}] console.${m.type()}`, m.text().slice(0, 200))
  })
  page.on('pageerror', (e) => console.log(`DIAG[${project}] pageerror`, e.message.slice(0, 200)))
  let loaded = false
  page.on('load', () => (loaded = true))
  const t0 = Date.now()
  await page.goto('http://localhost:3000', { waitUntil: 'commit' })
  await page.waitForTimeout(25000)
  console.log(`DIAG[${project}] loaded=${loaded} pending=${pending.size} elapsed=${Date.now() - t0}ms`)
  for (const [r, t] of pending) {
    console.log(`DIAG[${project}] pending ${r.resourceType()} ${r.url().slice(0, 150)} (${Date.now() - t}ms)`)
  }
})
