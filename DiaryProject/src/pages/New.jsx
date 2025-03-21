import {useSearchParams} from "react-router-dom";

const New = () => {
    const [params, setParams] = useSearchParams();
    console.log(params.get("value")); //http://localhost:5173/new?value=1

    return <div>New</div>;
 }

 export default New;