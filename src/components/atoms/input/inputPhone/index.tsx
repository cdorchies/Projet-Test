import { Controller } from 'react-hook-form';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type Props = {
  register: any;
};

export default function Phone({ register, control }: Props) {
  return (
    <Controller
      control={control}
      name="phoneNumber"
      render={({ field: { onChange, value } }) => (
        <ReactPhoneInput
            country={'fr'}
            {...register('phoneNumber', { required: true })}
            value={value}
            onChange={onChange}
        />
      )}
    />
  )
}
