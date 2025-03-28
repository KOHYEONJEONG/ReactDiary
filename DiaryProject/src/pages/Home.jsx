import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
//인덱스 페이지
const Home = () => {
    return <div>
                <Header
                    title={"2025년 3월"}
                    leftChild={<Button text={"<"}/>}
                    rightChild={<Button text={">"}/>}
                />

                <DiaryList />
            </div>;
 }

 export default Home;