import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePageComponent } from "./home-page.component";
import { RouterModule } from "@angular/router";

const route = { path: "", component: HomePageComponent };

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, RouterModule.forChild([route])]
})
export class HomePageModule {}
