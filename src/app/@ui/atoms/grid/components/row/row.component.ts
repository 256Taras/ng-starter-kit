import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";

import { GridBreakpointName } from "@shared/utils/grid-breakpoints.util";

@Component({
  selector: "app-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {
  @Input()
  public noPadding = false;

  private _lastMode: string | GridBreakpointName | null = null;

  public constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  @Input()
  public set mode(mode: string | GridBreakpointName | null) {
    this._update(mode ?? GridBreakpointName.Xs);
  }

  @HostBinding("class.no-padding")
  public get isNoPadding(): boolean {
    return this.noPadding;
  }

  public ngOnInit(): void {
    if (!this._lastMode) {
      this._update(GridBreakpointName.Xs);
    }
  }

  private _update(mode: string | GridBreakpointName): void {
    if (this._lastMode !== mode) {
      if (this._lastMode) {
        this.renderer.removeClass(this.elementRef.nativeElement, `row-${mode}`);
      }
      this._lastMode = mode;
      this.renderer.addClass(this.elementRef.nativeElement, `row-${mode}`);
    }
  }
}
