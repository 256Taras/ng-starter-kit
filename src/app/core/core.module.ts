import { NgModule } from "@angular/core";

import { coreContainers } from "./core.common";

@NgModule({
  declarations: [...coreContainers],
  imports: []
})
export class CoreModule {}
