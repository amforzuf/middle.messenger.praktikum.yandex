export type SendInputProps = {
  events: Record<string, (event: Event) => void>;
  keyboardEvents: Record<string, (event: KeyboardEvent) => void>;
};
