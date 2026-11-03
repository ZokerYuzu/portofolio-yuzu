import { unlink } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ASSETS = path.resolve(import.meta.dirname, '../public/assets')

const IMAGES = [
  { file: 'profile.png', width: 640, quality: 82 },
  { file: 'webhola.png', width: 800, quality: 78 },
  { file: 'webzoom.png', width: 800, quality: 78 },
  { file: 'apphola.png', width: 800, quality: 78 },
  { file: 'pdfconv.png', width: 800, quality: 78 },
  { file: 'weblaundry.png', width: 800, quality: 78 },
  { file: 'wardah.png', width: 800, quality: 78 },
  { file: 'webdesa.png', width: 800, quality: 78 },
]

const UNUSED = ['1.jpeg', 'project1.png', 'project2.png', 'Screenshot (418).png', 'Screenshot (424).png']

for (const { file, width, quality } of IMAGES) {
  const input = path.join(ASSETS, file)
  const output = input.replace(/\.png$/, '.webp')
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output)
  const kb = Math.round(info.size / 1024)
  console.log(`${file} -> ${path.basename(output)} : ${kb} KB`)
}

for (const file of [...IMAGES.map((i) => i.file), ...UNUSED]) {
  await unlink(path.join(ASSETS, file)).catch(() => {})
}
console.log('Selesai. PNG asli & file tak terpakai dihapus.')
