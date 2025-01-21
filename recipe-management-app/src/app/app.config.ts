import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
