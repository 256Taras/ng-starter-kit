import { NgModule } from "@angular/core";
import { NotFoundModule } from "./modules/not-found/not-found.module";
import { HomeRoutingModule } from "./modules/home/home-routing.module";

/**
 * The not-found page should be the last
 */
@NgModule({
  imports: [HomeRoutingModule, NotFoundModule]
})
export class AppModule {}
