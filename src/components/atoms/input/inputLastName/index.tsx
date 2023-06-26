type Props = {
  register: any;
};

export default function LastName({ register }: Props) {

  return (
    <input {...register("lastName", { required: true, maxLength: 20 })} placeholder="Nom" />
  )
}
