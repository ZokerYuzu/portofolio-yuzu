import { chromium } from 'playwright-core'

const browser = await chromium.launch({ channel: 'msedge', headless: true })
const out = 'C:/Users/ASUS/AppData/Local/Temp/opencode'

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mobile.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await mobile.waitForTimeout(2000)
await mobile.screenshot({ path: `${out}/pw-mobile-hero.png` })

const desktop = await browser.newPage({ viewport: { width: 1920, height: 1080 } })
await desktop.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await desktop.waitForTimeout(1500)
await desktop.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await desktop.waitForTimeout(2000)
await desktop.screenshot({ path: `${out}/pw-cta-1080p.png` })

await browser.close()
console.log('Selesai: pw-mobile-hero.png + pw-cta-1080p.png')
