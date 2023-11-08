export type IconButtonProps = {
  class: string;
  events?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    click: (e: Event) => void;
  };
};
