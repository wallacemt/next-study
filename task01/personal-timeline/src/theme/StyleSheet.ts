import { Breakpoints } from "@skynexui/responsive_stylesheet";

type ResponsivePorperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  fontFamily?: string;
  backgroundColor?: ResponsivePorperty<string> | string;
  [key: string]: any;
}
