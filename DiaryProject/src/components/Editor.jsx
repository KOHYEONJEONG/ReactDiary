import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
    {
        emotionId: 1,
        emotionName: "완전 좋음",
    },
    {
        emotionId: 2,
        emotionName: "좋음",
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭",
    },
    {
        emotionId: 4,
        emotionName: "나쁨",
    },
    {
        emotionId: 5,
        emotionName: "끔찍함",
    },
];

const Editor = () => {
    const emotionId = 1;

    return (
        <div className="Editor">
            {/*네개의 section 태그 (div태그와 이름만 다를뿐 기능은 같다)*/}

            <section className="date_section">
                <h4>오늘의 날짜</h4>
                <input type="date" />
            </section>

            <section className="emotion_section">
                <h4>오늘의 감정</h4>
                <div className="emotion_list_wrapper">
                    {emotionList.map((item) => (
                        <EmotionItem
                            key={item.emotionId}
                            {...item}
                            isSelected={item.emotionId === emotionId} //현재 클릭한 emotionId와 같으면 true 넘기기
                        />
                    ))}
                </div>
            </section>

            <section className="content_section">
                <h4>오늘의 일기</h4>
                <textarea placeholder="오늘은 어땠나요?" />
            </section>

            <section className="button_section">
                <Button text={"취소하기"} />
                <Button text={"작성완료"} type={"POSITIVE"} />
            </section>
        </div>
    );
};

export default Editor;