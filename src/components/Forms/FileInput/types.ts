export type inputFileProps = {
  accept: string;
  events?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    change: (e: any) => void;
  };
};
