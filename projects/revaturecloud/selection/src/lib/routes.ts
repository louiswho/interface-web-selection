import { Routes } from '@angular/router'
import { TableViewComponent } from './components/table-view/table-view.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';

export const appRoutes: Routes = [
  {
    path: 'table', component: TableViewComponent
  },
  {
    path: 'content-wrapper', component: ContentWrapperComponent
  },
  {
    path: '', component: ContentWrapperComponent
  }
];
