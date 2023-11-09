export type AddChatButtonButtonProps = {
  class?: string;
  buttonTitle: string;
  disabled?: boolean;
  events?: {
    click: (e: Event) => void;
  };
};
