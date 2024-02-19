import axios from "axios";
import styled from "styled-components";

import { todo } from "../types/todo";
import TodoCard from "../components/TodoCard";

import './InfinityScroll.css';
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ScrollContainer = styled.div`
  text-align: center;
  .todo-card {
    background-color: #9f9f9f;
    padding: 1rem;
    font-size: 20px;
  }
`

const InfinityScroll = () => {

  const {ref, inView} = useInView();

  const fetchTodos = async ({pageParam} : { pageParam: number}) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`);
    return res.data;
  }

  const { data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastpage, allpage) => {
      const nextPage = lastpage.length ? allpage.length + 1 : undefined ;
      return nextPage
    }
  })

  const content = data?.pages.map((todos: todo[]) => 
    todos.map((todo) => {
      return <TodoCard key={todo.id} todo={todo}/>
    })
  );

  useEffect(() => {
    if(inView) {
      fetchNextPage();
    }
  },[inView, fetchNextPage])

  if(status === 'pending') {
    return <p>Loading....</p>
  }
  if(status === 'error') {
    return <p>Error : {error.message}</p>
  }

  return ( 
    <ScrollContainer>
      {content}
      <button ref={ref} disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? 'Loding more...' : hasNextPage ? '불러오기' : '불러올 것이 없습니다.'}
      </button>
      {isFetchingNextPage ? 'Loding...' : undefined}
    </ScrollContainer>
  );
}

export default InfinityScroll;




/*
  😃initialPageParam😃
  queryFn 으로 불러온 promise 함수에 인자로 넘겨준다. 
  대체적으로 pageParam 을 많이 쓴다.(props 로 받아서 확인 가능)
  
  😃getNextPageParam😃
  인자로 lastpage, allpage 가 들어갈 수 있는데 대부분 allpage.length + 1 로 정의해둔다.
  lastpage -> 내가 불러온 이전 데이터의 정보가 있습니다. [{},{},{}..] 이런식으로 보여줍니다.
  allpage -> 지금까지 불러온 데이터 정보가 있습니다. [[{},{},{}...], [{},{}...], [].....] 이런식으로 하나씩 증가합니다.
  예를 들어 계속 allpage.length + 1 이라면 함수를 호출할때 마다 리스트안에 리스트가 하나씩 증가합니다.

  😃fetchNextPage😃 
  getNextPageParam 의 return 값을 호출해 줍니다.

  😃isFetchingNextPage😃
  데이터를 불러오고 있을때 true 를 반환( 데이터를 안 불러오면 false)

  😃hasNextPage😃
  hasNextPage는 getNextPageParam에서 반환된 값이 undefined일 때 false를 반환합니다. 
  이는 더 이상 다음 페이지가 없다는 것을 나타내며, false일 경우 무한 스크롤이 끝남을 의미합니다.
  
*/

// ---------------------------------------------------------------------------

/*    이러한 코드를 쓴 이유 

const nextPage = lastpage.length ? allpage.length + 1 : undefined ;
return nextPage

lastpage 는 직전에 불러온 데이터의 정보입니다. 만약 직전에 불러온 데이터가 없을 경우 undefined 로 설정합니다.
이렇게 만들어야 hasNextPage 가 false 로 반환되며 hasNextPage 를 이용해 무한 스크롤을 끝낼 수 있습니다.

disabled={!hasNextPage || isFetchingNextPage}
isFetchingNextPage 를 넣은 이유는 인터넷 속도가 느릴때 데이터를 불러오고 있는 중에 
버튼을 클릭할 수 없게 만들기 위해서 입니다. 

*/