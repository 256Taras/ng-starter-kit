import { NgModule } from "@angular/core";

import { AppModule } from "./app.module";
import { CoreModule } from "@core/core.module";
import { AppComponent } from "@core/components/app/app.component";

@NgModule({
  imports: [AppModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
