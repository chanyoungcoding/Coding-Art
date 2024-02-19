import { useEffect, useState } from "react";
import Pagination from 'react-js-pagination';

import './ReactPagination.css';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { todo } from "../types/todo";

const ReactPagination = () => {

  const [page, setPage] = useState(1);
  const [todosData, setTodosData] = useState<todo[]>([]);
  const [currentData, setCurrentData] = useState<todo[]>([]);

  const itemsPerPage = 5;

  const fetchTodos = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    const data = response.data;
    setTodosData(data);
    setCurrentData(data.slice(0, itemsPerPage))
    return response.data;
  }

  const {status, error} = useQuery({
    queryKey: ['paginationTodo'],
    queryFn: fetchTodos
  })

  useEffect(() => {
		const startIndex = (page - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;

		setCurrentData(todosData.slice(startIndex, endIndex));
	},[page, todosData]);

  const handlePageChange = (page: number) => {
    setPage(page);
  }

  const content = currentData.map(item => (
    <div key={item.id}>
      <p>{item.title}</p>
    </div>
  ))


  if(status === 'pending') {
    return <p>Loading....</p>
  }
  if(status === 'error') {
    return <p>Error : {error.message}</p>
  }

  return (
    <div>
      <div>
        {content}
      </div>
      <Pagination
        activePage={page}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={todosData.length}
        pageRangeDisplayed={5}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default ReactPagination



/*

activePage : 현재 활성화 된 페이지 useState 를 이용하는 경우가 대부분이다.
itemsCountPerPage : 한 페이지당 보여줄 리스트 아이템의 개수
totalItemsCount : 총 보여줄 아이템의 개수 totalItemsCount / itemsCountPerPage 의 값만큼의 페이지 개수를 가진다.
pageRangeDisplayed : 몇개의 페이지 버튼을 보여줄 지 결정해 줍니다.
prevPageText , nextPageText : 다음, 전 버튼을 어떻게 꾸며줄지 정해줍니다.

*/