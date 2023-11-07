export type ButtonProps = {
  class?: string;
  buttonTitle: string;
  type?: string;
  id?: string;
  disabled?: () => boolean;
  events?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    click: (e: Event) => void;
    submit?: () => void;
  };
};
