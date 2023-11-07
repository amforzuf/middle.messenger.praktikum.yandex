import { AuthInput } from '../../components/Forms/AuthInput';

export interface SubmitPageProps {
  checkInput?: Array<AuthInput>;
  events?: {
    submit: (event: FormDataEvent) => void;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any;
}
