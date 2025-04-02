import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import "./DiaryList.css"
import {useState} from "react";
const DiaryList = ({data}) => {
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType =(e) => {
        setSortType(e.target.value);
    }

    const getSortedData = () => {
        return data.toSorted((a,b) => {

            if(sortType === "oldset"){
                return Number(a.createdDate) - Number(b.createdDate)
            }else{
                return Number(b.createdDate) - Number(a.createdDate)
            }
        })
    }

    const sortedData = getSortedData();
    console.log(sortedData)

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select value={sortType} onChange={onChangeSortType}>
                    {/*실제 value 값은 영문으로 하자*/}
                    <option value="latest">최신순</option>
                    <option value="oldset">오래된순</option>
                </select>

                <Button text={"새 일기 쓰기"} type={"POSITIVE"}></Button>
            </div>
            <div className="list_wrapper">
                {/*각각의 일기 데이터를 보여줌.(고유 key값 필수 설정)*/}
                {
                    sortedData.map((item) => (
                    <DiaryItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default DiaryList;