export type AuthInputProps = {
  class?: string;
  value: string;
  type: string;
  name: string;
  placeholder: string;
  validationError?: boolean;
  validationErrorMessage?: string;
  hide?: boolean;
  onkeydown?: (e: KeyboardEvent) => void;

  events?: {
    blur: () => void;
  };
};
