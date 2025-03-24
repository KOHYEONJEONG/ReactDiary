import "./App.css";
import "./index.css";
import React,{useReducer, useRef} from "react";
import { Routes, Route} from "react-router-dom"; //Link 컴포넌트 = a태그
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

const mockData = [//임시 데이터
	{
		id : 1,
		createDate : new Date().getTime(),
		emotionId : 1,
		contents : "1번 일기"
	},
	{
		id : 2,
		createDate : new Date().getTime(),
		emotionId : 2,
		contents : "2번 일기"
	}
]

function  reducer(state, action){
	console.log(action);
	switch (action.type){ //명심! type
		case "CREATE":
			return [action.data, ...state];
		default:
			return state;
	}
}
function App() {
	const [data, dispatch] = useReducer(reducer, mockData);//네트워크 탭 > App 컴포넌트 클릭 > Reducer 에서 확인 가능.
	const idRef = useRef(3);

	const onCreate = (createdData, emotionId, contents) => {
		//새로운 일기를 추가하는 기능.
		dispatch({
			type: "CREATE",
			data: {
				id: idRef.current++,
				createdData,
				emotionId,
				mockData
			}
		});
	}

	return (
		<>

			{/* 전역으로 보일게 아니면 Routes 컴포넌트 외부에 배치는 적절하지 않다. */}
			{/*  Routes 컴포넌트 안에는 Route 컴포넌트만 적을 수 있다.
			path가 들어오면 아래 적힌
			Route컴포넌트를 위에서부터 아래로 찾는다. */}
			<button onClick={()=>{
				onCreate(new Date().getTime(),1,"hello");
			}}>일기 추가 테스트</button>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<New />} />
				{/*⏬URL Parameter를 사용하기 위해 ':id' 지정*/}
				<Route path="/diary/:id" element={<Diary />} />
				{/* ⏬와일드카드 : 위에 경로와 일치하지 않으면 Notfound 컴포넌트를 페이지 렌더링하게된다. */}
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;
