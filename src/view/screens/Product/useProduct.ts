import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
  name: string;
  referenceCode: string;
  wholesalePrice: number;
  retailPrice: number;
}

export function useProduct() {
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      referenceCode: '',
      wholesalePrice: 0,
      retailPrice: 0,
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
