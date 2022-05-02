import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/not-found-page/not-found-page.module").then(
        (m) => m.NotFoundPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundModule {}
