// Em: data/projects.ts

import { Project } from '../lib/types';
import { getDividiProject } from './projects/dividi';
import { getTrybProject } from './projects/tryb';
import { getSonicAppProject } from './projects/sonic-app';
import { getGoldenBearProject } from './projects/golden-bear';

export const getUxUiProjects = (t: { [key: string]: any }): Project[] => ([
  getDividiProject(t),
  getTrybProject(t),
  getSonicAppProject(t),
  getGoldenBearProject(t)
]);