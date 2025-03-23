import "./App.css";
import "./index.css";
import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; //Link 컴포넌트 = a태그
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
	const nav = useNavigate();

	//이벤트 핸들러 함수 안에서 특정 조건에 따라 이동할 페이지가 다르다면 import - useNavigate  커스텀 훅을 사용하자.
	const onClickButton = () => {
		nav("/new"); // navigate 함수를 받아와서 사용하면 된다.
	};
	return (
		<>
			<div>
				{/* public폴더 아래에서 불러오면 이미지 최적화 x(새로고침할떄마다 매번 불러옴.) <img src={"/emotion1.png"} /> */}
				<img src={getEmotionImage(1)} />
				<img src={getEmotionImage(2)} />
				<img src={getEmotionImage(3)} />
				<img src={getEmotionImage(4)} />
				<img src={getEmotionImage(5)} />
				{/* <img src={emotion5} /> */}
			</div>
			{/* 전역으로 보일게 아니면 Routes 컴포넌트 외부에 배치는 적절하지 않다. */}

			<div>
				{/*🚩 Link 컴포넌트*/}
				{/*	내부 링크 만들때 사용, CSR 방식, 새로고침되지 않고 쾌적하고 빠르다.*/}
				{/*🚩 a태그*/}
				{/*	a태그 사용하면 SSR 방식으로 새로고침되는걸 알 수 있다.*/}
				<Link to={"/"}>Home</Link>
				<Link to={"/new"}>New</Link>
				<Link to={"/diary"}>Diary</Link>
				<button onClick={onClickButton}>New 페이지로 이동</button>
			</div>

			{/*  Routes 컴포넌트 안에는 Route 컴포넌트만 적을 수 있다. 
			path가 들어오면 아래 적힌
			Route컴포넌트를 위에서부터 아래로 찾는다. */}

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
