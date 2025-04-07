import {useParams} from "react-router-dom"
import {useSearchParams} from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header.jsx";

const Diary = () => {
    const params =useParams();

    return <div>
        <Header
            title={"yyyy-mm-dd 기록"}
        >

        </Header>

    </div>;
 }

 export default Diary;