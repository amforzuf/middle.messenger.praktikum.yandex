export type ButtonProps = {
  class?: string;
  buttonTitle: string;
  type?: string;
  id?: string;
  disabled?: () => boolean;
  events?: {
    click: (e: Event) => void;
  };
};
