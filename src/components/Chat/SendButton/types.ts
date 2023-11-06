export type SendButtonProps = {
  class?: string;
  events?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    click: (e: any) => void;
  };
};
