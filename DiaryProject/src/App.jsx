import "./App.css";
import { Routes, Route } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
	return (
		<>
			{/* 전역으로 보일게 아니면 Routes 컴포넌트 외부에 배치는 적절하지 않다. */}
			<div>모든페이지에서 보이나?</div>
			{/*  Routes 컴포넌트 안에는 Route 컴포넌트만 적을 수 있다. 
			path가 들어오면 아래 적힌
			Route컴포넌트를 위에서부터 아래로 찾는다. */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new" element={<New />} />
				<Route path="/diary" element={<Diary />} />
				{/* 와일드카드 : 위에 경로와 일치하지 않으면 Notfound 컴포넌트를 페이지 렌더링하게된다. */}
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	);
}

export default App;
