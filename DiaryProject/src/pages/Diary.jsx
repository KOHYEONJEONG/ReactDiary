import { useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header.jsx";
import Viewer from "../components/Viewer.jsx";

const Diary = () => {
	const params = useParams();
	const nav = useNavigate();

	return (
		<div>
			<Header
				title={"yyyy-mm-dd 기록"}
				leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
				rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />}
			></Header>

			{/* 상세화면 */}
			<Viewer></Viewer>
		</div>
	);
};

export default Diary;
