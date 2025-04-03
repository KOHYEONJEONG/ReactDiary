import {useSearchParams} from "react-router-dom";
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import {useNavigate} from "react-router-dom"

const New = () => {
    // const [params, setParams] = useSearchParams();
    // console.log(params.get("value")); //http://localhost:5173/new?value=1
    const nav = useNavigate();

    return (
        <div>
            <Header
                title={"새 일기 쓰기"}
                // nav(-1)은 뒤로가기
                leftChild={<Button text={"< 뒤로 가기"}  onClick={()=>{nav(-1)}}/>}
            />
            <Editor/>
        </div>
    );
}
 export default New;