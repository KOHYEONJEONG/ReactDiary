import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";

// 기존 일기 수정 페이지(수정하기 버튼 클릭 후 인입되는 페이지)
const Edit = () => {
	const params = useParams();
	console.log(params.id);
	const nav = useNavigate();
	const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
	const data = useContext(DiaryStateContext);
	const [curDiaryItem, setCurDiaryItem] = useState();

	useEffect(() => {
		//형변환 하여 안전하게 비교하기
		const currentDiarayItem = data.find((item) => {
			return String(item.id) === String(params.id);
		});
		console.log(currentDiarayItem);

		if (!currentDiarayItem) {
			//존재하지 않는 페이지에 들어온 경우
			window.alert("존재하지 않는 일기입니다.");
			nav("/", { replace: true });
		}

		setCurDiaryItem(currentDiarayItem);
	}, [params.id]); //data는 제외한다.(url 파라미터의 id값이 변화하지 않으면 다시는 호출되지 않게.)

	const onClickDelete = () => {
		//삭제 확인 후 삭제 진행
		if (window.confirm("삭제하시겠습니까?")) {
			onDelete(params.id);
			nav("/", { replace: true });
		}
		nav("/", { replace: true });
	};

	const onSubmit = (input) => {
		if (window.confirm("수정하시겠습니까?")) {
			onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
		}
	};

	return (
		<div>
			<Header
				title={"수정페이지"}
				leftChild={<Button text={"뒤로가기"} onClick={() => nav(-1)} />}
				rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
			></Header>
			<Editor initData={curDiaryItem} onSubmit={onSubmit}></Editor>
		</div>
	);
};

export default Edit;
