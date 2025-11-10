import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Home } from './home/home';
import { Boutique } from './boutique/boutique';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'boutique', component: Boutique },
    { path: '**', redirectTo: '' },
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}