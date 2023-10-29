export type ButtonProps = {
  class?: string;
  buttonTitle: string;
  type?: string;
  id?: string;
  events: {
    click: () => void;
  };
};
