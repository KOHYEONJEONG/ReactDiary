import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import "./DiaryList.css"
const DiaryList = () => {
    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select>
                    <option value="lasted">최신순</option>
                    <option value="oldest">오래된순</option>
                </select>

                <Button text={"새 일기 쓰기"} type={"POSITIVE"}></Button>
            </div>
            <div className="list_wrapper">
                <DiaryItem/>
            </div>
        </div>
    );
};

export default DiaryList;