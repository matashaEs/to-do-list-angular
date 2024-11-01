import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path: '', canActivate: [authGuard], loadChildren:()=> import('./features/tasks/tasks.module').then(m => m.TasksModule)},
    {path: 'auth',loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)}
];
