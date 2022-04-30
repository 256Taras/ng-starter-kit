import { NgModule } from "@angular/core";
import { TransferHttpCacheModule } from "@nguniversal/common";
import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";

import { LoggerModule } from "@core/logger/logger.module";
import { environment } from "@environment";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    LoggerModule.forRoot(environment.logging)
  ]
})
export class AppModule {}
