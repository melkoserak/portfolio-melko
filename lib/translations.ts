// Em: lib/translations.ts

import { promises as fs } from 'fs';
import path from 'path';

export async function getTranslations(locale: string | undefined) {
  const finalLocale = locale || 'pt';

  const commonPath = path.join(process.cwd(), 'locales', finalLocale, 'common.json');
  const dividiPath = path.join(process.cwd(), 'locales', finalLocale, 'dividi.json');
  const trybPath = path.join(process.cwd(), 'locales', finalLocale, 'tryb.json');
  const sonicPath = path.join(process.cwd(), 'locales', finalLocale, 'sonic.json');
  const goldenBearPath = path.join(process.cwd(), 'locales', finalLocale, 'golden-bear.json'); // ADICIONE ESTA LINHA

  const commonContent = await fs.readFile(commonPath, 'utf8');
  const dividiContent = await fs.readFile(dividiPath, 'utf8');
  const trybContent = await fs.readFile(trybPath, 'utf8');
  const sonicContent = await fs.readFile(sonicPath, 'utf8');
  const goldenBearContent = await fs.readFile(goldenBearPath, 'utf8'); // ADICIONE ESTA LINHA

  const common = JSON.parse(commonContent);
  const dividi = JSON.parse(dividiContent);
  const tryb = JSON.parse(trybContent);
  const sonic = JSON.parse(sonicContent);
  const goldenBear = JSON.parse(goldenBearContent); // ADICIONE ESTA LINHA

  return {
    ...common,
    dividi,
    tryb,
    sonic,
    goldenBear, // ADICIONE ESTA LINHA
  };
}