import { Routes } from '@angular/router';
import { Home } from './features/home/home/home';
import { Contact } from './features/contact/contact/contact';
import { Articles } from './features/articles/articles/articles';


export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },

    {
        path: 'contact',
        component: Contact
    },

    {
        path: 'articles',
        component: Articles
    },

    // Redirect empty path to 'articles'
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full'
    },

    // Wildcard route for Articles page
    {
        path: '**',
        redirectTo: 'articles'
    }
];
