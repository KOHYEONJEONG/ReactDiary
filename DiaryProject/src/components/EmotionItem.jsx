import "./EmotionItem.css"
import  {getEmotionImage} from "../util/get-emotion-image.js"; //이미지를 불러오는 코드를 별도의 모듈로 관리

const EmotionItem = ({emotionId, emotionName, isSelected}) => {
    //감정 이미지 렌더링된 화면 보여주기
    
    return (
        <div
            // 선택한 버튼이면 class 추가하여 식별 ex)EmotionItem_on_1
            className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
        >
            <img className="emotion_img" src={getEmotionImage(emotionId)} />
            <div className="emotion_name">{emotionName}</div>
        </div>
    );
}
export default EmotionItem;