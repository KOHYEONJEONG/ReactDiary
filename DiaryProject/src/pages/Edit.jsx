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
	const data = useContext(DiaryStateContext); // 일기 데이터 배열
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
			nav("/", { replace: true }); // Home 페이지로 돌아가고 + 이후 뒤로가기 방지
		}

		setCurDiaryItem(currentDiarayItem);// return 문 대신 setState를 호출하여 저장한다.

		//노란색 경고는 무시해도 된다.
	}, [params.id]); //data는 제외한다.(url 파라미터의 id값이 변화하지 않으면 다시는 호출되지 않게.)

	const onClickDelete = () => {
		//삭제 확인 후 삭제 진행
		if (window.confirm("삭제하시겠습니까?")) {
			onDelete(params.id);
		}
		nav("/", { replace: true }); //Home 페이지로 이동하면서 + 다시 수정페이지로 돌아오지 못하게 뒤로가기 방지
	};

	const onSubmit = (input) => {
		if (window.confirm("일기를 정말 수정할까요?")) {
			onUpdate(
				params.id,
				input.createdDate.getTime(),
				input.emotionId,
				input.content
			);
			nav("/", { replace: true });
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
