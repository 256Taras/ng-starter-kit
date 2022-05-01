import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";
import { GridBreakpointName } from "@shared/utils/grid-breakpoints.util";

@Component({
  selector: "app-column",
  templateUrl: "./column.component.html",
  styleUrls: ["./column.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent implements OnInit {
  private lastModes: Partial<Record<GridBreakpointName, number>> | null = null;

  public constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  @Input()
  public set modes(modes: Partial<Record<GridBreakpointName, number>>) {
    this._update(modes ?? { [GridBreakpointName.Xs]: 0 });
  }

  public ngOnInit(): void {
    if (!this.lastModes) {
      this._update({ [GridBreakpointName.Xs]: 0 });
    }
  }

  private _update(modes: Partial<Record<GridBreakpointName, number>>): void {
    if (
      !this.lastModes ||
      JSON.stringify(this.lastModes) !== JSON.stringify(modes)
    ) {
      if (this.lastModes) {
        for (const [key, value] of Object.entries(this.lastModes)) {
          let className = `column-${key}`;
          if (value && value > 0) {
            className += `-${value}`;
          }
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        }
      }
      this.lastModes = modes;
      for (const [key, value] of Object.entries(this.lastModes)) {
        let className = `column-${key}`;
        if (value && value > 0) {
          className += `-${value}`;
        }
        this.renderer.addClass(this.elementRef.nativeElement, className);
      }
    }
  }
}