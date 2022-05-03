import { NgModule } from "@angular/core";

import { coreContainers } from "./core.common";
import { PreloadAllModules, RouterModule } from "@angular/router";
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
    /**
     * But this strategy PreloadAllModules may not be the best solution since Angular will load all modules, even those that the user visits very rarely. What we can do? Lets define our own Preload Strategy.
     */
    RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    LoggerModule.forRoot(environment.logging)
  ],
  exports: [RouterModule]
})
export class CoreModule {}
