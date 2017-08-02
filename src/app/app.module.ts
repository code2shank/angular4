import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RouterComponent } from './router/router.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent,
    DepartmentListComponent,
    EmployeeListComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot([
          { path: 'departments', component: DepartmentListComponent },
          { path: 'employees', component: EmployeeListComponent }

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
