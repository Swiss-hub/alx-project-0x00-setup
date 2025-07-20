export interface PillProps {
  title: string;
  styles: string;
  className?: string;
}

export interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
}