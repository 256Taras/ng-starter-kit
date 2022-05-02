import { NgModule } from "@angular/core";

import { coreContainers } from "./core.common";
import { RouterModule } from "@angular/router";
import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { LoggerModule } from "@core/logger/logger.module";
import { environment } from "@environment";

@NgModule({
  declarations: [...coreContainers],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    LoggerModule.forRoot(environment.logging)
  ],
  exports: [RouterModule]
})
export class CoreModule {}
