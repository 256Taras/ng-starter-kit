import { NgModule } from "@angular/core";
import { NotFoundModule } from "./modules/not-found/not-found.module";
import { HomeModule } from "./modules/home/home.module";

/**
 * The not-found page should be the last
 */
@NgModule({
  imports: [HomeModule, NotFoundModule]
})
export class AppModule {}
