import { MainComponent } from './main.component';
import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'role', loadChildren: './role/role.module#RoleModule' },
            { path: 'function', loadChildren: './function/function.module#FunctionModule' },
            { path: 'product', loadChildren: './product/product.module#ProductModule' },
            { path: 'product-category', loadChildren: './product-category/product-category.module#ProductCategoryModule' }
        ]
    }
]