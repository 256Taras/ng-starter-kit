import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
// eslint-disable-next-line no-undef
describe("AppComponent", () => {
  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });
  // eslint-disable-next-line no-undef
  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // eslint-disable-next-line no-undef
    expect(app).toBeTruthy();
  });
  // eslint-disable-next-line
  it(`should have as title 'ng-starter-kit'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // eslint-disable-next-line
    expect(app.title).toEqual("ng-starter-kit");
  });
  // eslint-disable-next-line
  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // eslint-disable-next-line
    expect(compiled.querySelector(".content span")?.textContent).toContain(
      "ng-starter-kit app is running!"
    );
  });
});
