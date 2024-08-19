import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
}

export function useSeller() {
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return {
    errors,
    register,
    onsubmit: handleSubmit(onSubmit),
  };
}
