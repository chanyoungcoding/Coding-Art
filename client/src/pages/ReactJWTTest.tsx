import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

interface JwtData {
  token: string
}

const ReactJWTTest = () => {

  // jwt 를 서버에서 가져오기 axios
  const fetchData = async () => {
    const res = await axios.get<JwtData>('http://localhost:4040/jwtTest')
    localStorage.setItem('jwtToken', res.data.token)
    return res.data;
  }

  // jwt 를 서버에 보내주기 axios
  const postJwtData = async () => {
    const storedToken = localStorage.getItem('jwtToken')
    const res = await axios.post('http://localhost:4040/acceptJwt',null, {
      headers: {
        Authorization: `Bearer ${storedToken}`,
      }
    })
    return res.data
  }

  const {status} = useQuery({
    queryKey: ['jwtTest'],
    queryFn: fetchData
  })

  const {mutate} = useMutation({
    mutationKey: ['jwtPostTest'],
    mutationFn: postJwtData,
    onSuccess: (e) => {
      console.log(e)
    },
    onError: (e) => {
      console.log(e)
    }
  })

  const handleOnClick = () => {
    mutate();
  }

  if( status === 'error') {
    console.log('error');
  }
  if(status === 'success') {
    console.log('success');
  }

  return (
    <div>
      <h1>ReactJWTTest</h1>
      <button onClick={handleOnClick}>JWT Token 보내기</button>
    </div>
  )
}

export default ReactJWTTest