export type SendInputProps = {
  name: string;
  isAutofocus?: boolean;
  events?: Record<string, (args: unknown) => void>;
  value?: string;
};
