export interface RoutePath {
  id: number;
  isActive: number | boolean;
  name: string;
  fatherID: number | null | String;
  level: string;
  url: string;
  icon: string;
  children?: RoutePath[];
}
