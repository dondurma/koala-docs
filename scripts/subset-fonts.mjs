/**
 * 字体子集化脚本（N7）。
 *
 * 用途：把 App 侧复古字体源文件按语言子集化为 woff2，输出到 docs/public/fonts/，
 *       并同步 4 份授权文本（OFL ×3 + 作者声明 ×1）到 docs/public/fonts/licenses/。
 *
 * 用法：
 *   npm run fonts:subset
 *   FONTS_SRC=/path/to/fonts npm run fonts:subset   # 覆盖字体源目录
 *
 * 说明：站点在线文档字符集固定于 docs/v1/**.md，新增生僻字后需重跑本脚本。
 */
import { readFile, writeFile, readdir, mkdir, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import subsetFont from 'subset-font'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const docsDir = path.join(repoRoot, 'docs')
const outDir = path.join(docsDir, 'public', 'fonts')
const licDir = path.join(outDir, 'licenses')

// 字体源目录：默认取同仓库 App 侧的 assets/fonts，可用 FONTS_SRC 覆盖
const srcDir = process.env.FONTS_SRC
  ? path.resolve(process.env.FONTS_SRC)
  : path.resolve(repoRoot, '..', 'koala', 'assets', 'fonts')

const LANGS = ['zh', 'zh-HK', 'en', 'ja', 'ko']
const PRINTABLE_ASCII = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('')

async function walk(dir) {
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else out.push(full)
  }
  return out
}

/** 收集指定语言目录下全部 .md 的字符集 */
async function collectChars(langs) {
  const set = new Set()
  for (const lang of langs) {
    const dir = path.join(docsDir, 'v1', lang)
    if (!existsSync(dir)) continue
    for (const file of await walk(dir)) {
      if (!file.endsWith('.md')) continue
      for (const ch of await readFile(file, 'utf8')) set.add(ch)
    }
  }
  return [...set].join('')
}

/** 取非 ASCII 字符（CJK 等），ASCII 由拉丁子集统一覆盖 */
function nonAscii(text) {
  return [...text].filter((ch) => ch.charCodeAt(0) > 0x7f).join('')
}

function resolveSrc(candidates) {
  for (const name of candidates) {
    const full = path.join(srcDir, name)
    if (existsSync(full)) return full
  }
  throw new Error(`字体源文件缺失：${candidates.join(' / ')}（查找目录 ${srcDir}）`)
}

async function emit(srcFile, outName, text, label) {
  const buf = await readFile(srcFile)
  const out = await subsetFont(buf, text, { targetFormat: 'woff2' })
  await writeFile(path.join(outDir, outName), out)
  console.log(`  ${outName.padEnd(30)} ${(out.length / 1024).toFixed(1)} KB  (${label})`)
}

async function main() {
  console.log(`字体源目录：${srcDir}`)
  await mkdir(outDir, { recursive: true })
  await mkdir(licDir, { recursive: true })

  const latinText = PRINTABLE_ASCII
  const hanText = nonAscii(await collectChars(['zh', 'zh-HK']))
  const jaText = nonAscii(await collectChars(['ja']))
  const koText = nonAscii(await collectChars(['ko']))

  await emit(
    resolveSrc(['RetroTypewriter-Regular.ttf', 'CourierPrime-Regular.ttf']),
    'koala-retro-latin.woff2',
    latinText,
    'latin regular',
  )
  await emit(
    resolveSrc(['RetroTypewriter-Bold.ttf', 'CourierPrime-Bold.ttf']),
    'koala-retro-latin-bold.woff2',
    latinText,
    'latin bold',
  )
  await emit(
    resolveSrc(['RetroTypewriter-Italic.ttf', 'CourierPrime-Italic.ttf']),
    'koala-retro-latin-italic.woff2',
    latinText,
    'latin italic',
  )
  await emit(
    resolveSrc(['RetroCjkHan-Regular.ttf', 'HuiwenMincho-Regular.ttf']),
    'koala-retro-han.woff2',
    hanText,
    'zh / zh-HK',
  )
  await emit(
    resolveSrc(['RetroCjkJa-Regular.ttf', 'ZenOldMincho-Regular.ttf']),
    'koala-retro-ja.woff2',
    jaText,
    'ja',
  )
  await emit(
    resolveSrc(['RetroCjkKo-Regular.ttf', 'NanumMyeongjo-Regular.ttf']),
    'koala-retro-ko.woff2',
    koText,
    'ko',
  )

  // 授权文本：原样保留 4 份，并聚合为 FONTS.txt（footer 链接指向它）
  const LICENSES = [
    ['OFL-CourierPrime.txt', 'Courier Prime（RetroTypewriter）'],
    ['OFL-ZenOldMincho.txt', 'Zen Old Mincho（RetroCjkJa）'],
    ['OFL-NanumMyeongjo.txt', 'Nanum Myeongjo（RetroCjkKo）'],
    ['LICENSE-HuiwenMincho.txt', '汇文明朝体（RetroCjkHan）'],
  ]
  const parts = ['Koala Docs — Font Licenses', '']
  for (const [file, title] of LICENSES) {
    const full = path.join(srcDir, file)
    if (!existsSync(full)) throw new Error(`授权文本缺失：${full}`)
    await copyFile(full, path.join(licDir, file))
    parts.push('='.repeat(72), title, '='.repeat(72), '', await readFile(full, 'utf8'), '')
  }
  await writeFile(path.join(licDir, 'FONTS.txt'), parts.join('\n'))
  console.log(`  授权文本 ${LICENSES.length} 份 + FONTS.txt 已写入 ${path.relative(repoRoot, licDir)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
