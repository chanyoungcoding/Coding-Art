import { useForm, SubmitHandler } from "react-hook-form";

interface UserInput {
  name: string;
  password: string;
  age: number;
}

const ReactHookForm = () => {

  const {register, handleSubmit, formState: {errors} } = useForm<UserInput>();

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input {...register("name", { required: true, maxLength: 9 })} type="text" id="username" />
        {errors.name?.type === "required" && (<div>이름을 입력해 주세요.</div>)}
        {/* errors.name && errors.name.type === "required" */}

        <label htmlFor="password">Password</label>
        <input {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/})} type="password"  id="password" />
        {errors.password?.type === "pattern" && (<div>규칙에 맞게 패스워드를 입력해 주세요.</div>)}

        <label htmlFor="age">Age</label>
        <input {...register("age", {required: true, min:19, max: 65 })} type="text" />
        {errors.age?.type === "min" && (<div>최소 19 ~ 65 이하로 입력해 주세요.</div>)}
        <input type="submit" />
      </form>

    </div>
  )
}

export default ReactHookForm