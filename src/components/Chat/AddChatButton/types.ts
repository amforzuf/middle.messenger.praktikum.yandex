export type AddChatButtonButtonProps = {
  class?: string;
  buttonTitle: string;
  disabled?: boolean;
  events?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    click: (e: any) => void;
  };
};
