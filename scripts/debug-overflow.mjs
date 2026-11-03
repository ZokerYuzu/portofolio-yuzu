import { chromium } from 'playwright-core'

const width = Number(process.argv[2] ?? 1366)

const browser = await chromium.launch({ channel: 'msedge', headless: true })
const page = await browser.newPage({ viewport: { width, height: 800 } })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const res = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth
  const offenders = []
  document.querySelectorAll('body *').forEach((el) => {
    const r = el.getBoundingClientRect()
    if (r.right > vw + 1) {
      offenders.push({
        tag: el.tagName,
        cls: String(el.className).slice(0, 90),
        left: Math.round(r.left),
        right: Math.round(r.right),
        width: Math.round(r.width),
      })
    }
  })
  return {
    viewportWidth: vw,
    scrollWidth: document.documentElement.scrollWidth,
    offenders: offenders.slice(0, 15),
  }
})

console.log(JSON.stringify(res, null, 2))
await browser.close()
