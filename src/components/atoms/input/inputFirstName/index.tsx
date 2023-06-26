type Props = {
  register: any;
};

export default function FirstName({ register }: Props) {

  return (
    <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Prénom" />
  )
}
