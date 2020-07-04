import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticesComponent } from './notices/notices.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
// import { SettingsComponent } from './settings/settings.component';
const appRoutes: Routes = [
    { path : '' , redirectTo : '/home', pathMatch : 'full'},
    { path : 'home', component : HomeComponent}, // working
    { path : 'notices', component : NoticesComponent}, // working
    { path : 'courses', component : CoursesComponent},
    // { path : 'settings', component : SettingsComponent},
    { path : 'login', component : LoginComponent}, // working
    { path : 'faculty-admin', loadChildren: () => import('./faculty-admin/faculty-admin.module').then(m => m.FacultyAdminModule)},
    { path : 'student-admin', loadChildren: () => import('./student-admin/student-admin.module').then(m => m.StudentAdminModule)},
    { path : 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)},
    { path : 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule)}
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports : [RouterModule]
})
export class AppRoutingModule{

}
