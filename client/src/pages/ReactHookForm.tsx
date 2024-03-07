import { useForm, SubmitHandler } from "react-hook-form";

interface UserInput {
  name: string;
  password: string;
  age: number;
}

const ReactHookForm = () => {

  const {register, handleSubmit, watch, formState: {errors} } = useForm<UserInput>();

  const watchNameValue = watch('name');

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input {...register("name", { required: true, maxLength: 9 })} type="text" id="username" />
        {errors.name?.type === "required" && (<div>이름을 입력해 주세요.</div>)}
        <p>유저 이름 : {watchNameValue}</p>
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

/* 

✨ register ✨
react-hook-form 의 기능을 input 에 추가하고 싶을 때 사용합니다.

✨ errors ✨
유효성 검사가 실패했을때 특정 기능(오류 알려주기등) 을 할 수 있게 도와 줍니다.

✨ watch ✨
폼 내부의 입력 필드들을 모니터링하고 해당 입력 필드들의 값을 실시간으로 감시하는 기능입니다.
해당 기능을 사용하면 해당 기능이 포함된 컴포넌트들이 전부 리렌더링 되는 단점이 있습니다. (주의해서 사용)

------- 유효성 검사 -------
✨ required ✨
필수적으로 들어가야 할 데이터를 설정합니다.

✨ min, max ✨
데이터의 최소값, 최대값을 설정합니다.

✨ maxLength, minLength ✨
데이터의 최소 길이, 최대 길이를 설정합니다.

✨ pattern  ✨
일반적으로 정규표현식을 사용하며 정규표현식에 맞춰 데이터를 검사해 줍니다.

✨  ✨



*/