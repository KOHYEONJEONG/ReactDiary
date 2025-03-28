import {getEmotionImage} from "../util/get-emotion-image";
import Button  from "./Button";
import "./DiaryList.css"
const DiaryItem = () => {
    const emotionId = 5;
    return (
      <div className="DiaryItem">
          <div className={`img_section img_section+${emotionId}`}>
              <img src={getEmotionImage(emotionId)}/>
          </div>

          <div className="info_section">
              <div className="created_date">
                  {new Date().toLocaleDateString()}
              </div>
              
              <div className="content">일기 콘텐츠</div>
          </div>
          
          <div className="button_section">
              <Button text={"수정하기"}></Button>
          </div>
          
      </div>
    );
};

export default DiaryItem;