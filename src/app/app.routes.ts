import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:"",
        component:AppComponent
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"Item",
        component:ItemComponent
    },
    {
        path:"Contact",
        component:ContactComponent
    }
];
