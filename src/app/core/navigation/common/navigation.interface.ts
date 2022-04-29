export enum NavigationPath {
  Home = ""
}

export interface NavigationLink {
  route: NavigationPath;
  label: string;
  params?: Record<string, any>;
}
