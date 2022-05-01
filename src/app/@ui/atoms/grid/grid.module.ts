import { NgModule } from "@angular/core";

import { ColumnComponent } from "./components/column/column.component";
import { RowComponent } from "./components/row/row.component";

@NgModule({
  declarations: [RowComponent, ColumnComponent],
  exports: [RowComponent, ColumnComponent]
})
export class GridModule {}
