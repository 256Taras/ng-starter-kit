import { NgModule } from "@angular/core";
import { TransferHttpCacheModule } from "@nguniversal/common";
import {
  BrowserModule,
  BrowserTransferStateModule
} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserTransferStateModule,
    TransferHttpCacheModule
  ]
})
export class AppModule {}
