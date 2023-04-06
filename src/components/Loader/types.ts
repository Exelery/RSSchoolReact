export type Style = {
  [key: string]: string;
};

export interface TailSpinProps {
  radius?: string | number;
  strokeWidth?: string | number;
  height?: string | number;
  width?: string | number;
  color?: string;
  ariaLabel?: string;
  wrapperStyle?: Style;
  wrapperClass?: string;
  visible?: boolean;
}
