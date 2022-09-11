import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckBookComponent } from './components/check-book/check-book.component';

const routes: Routes = [{ path: '', component: CheckBookComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
