export type inputFileProps = {
  accept: string;
  class?: string;
  events?: {
    change: (e: Event) => void;
  };
};
