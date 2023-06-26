import { useForm } from "react-hook-form";
import InputFirstname from '../../atoms/input/inputFirstName';
import InputLastName from '../../atoms/input/inputLastName';
import InputPhone from '../../atoms/input/inputPhone';
import Submit from '../../atoms/submit';

type FormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export default function FormLogin() {
  
  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }
  });


  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputFirstname register={register} />
      <InputLastName register={register} />
      <InputPhone register={register} control={control} />
      <Submit />
    </form>
  )
}
