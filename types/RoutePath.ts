export interface RoutePath {
  id: number;
  throughout: boolean;
  isActive: number | boolean;
  name: string;
  fatherID: number | null | String;
  level: string;
  url: string;
  icon: string;
  update?: boolean;
  children?: RoutePath[];
  langs: TypeLangs[];
}

export interface TypeLangs {
  name: string;
  view: boolean;
}
