// 테스트 하기 전에 server 을 켜주시길 바랍니다.

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import Cookies from 'js-cookie';

interface TestData {
  name: string;
  age: number;
}

const Test = () => {

  const fetchData =async () => {

    Cookies.set('myCookie', 'cookieValue', { expires: 0.1 });

    const response = await axios.get<TestData[]>('http://localhost:4040/test', {
      withCredentials: true,
    })
    return response.data
  }

  const {data} = useQuery({
    queryKey: ['test'],
    queryFn: fetchData
  })

  console.log(data)

  return (
    <div>
      {data?.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  )
}

export default Test