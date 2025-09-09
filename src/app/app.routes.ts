import { Routes } from '@angular/router';
import { Aboutme } from './pages/aboutme/aboutme';
import { Skills } from './pages/skills/skills';

export const routes: Routes = [
    {
        path: '',
        component: Aboutme
    },
    {
        path: 'skills',
        component: Skills
    }
];
