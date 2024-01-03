import { Outlet } from "react-router-dom";
import DaisyNav from "../SharedComp/DaisyNav";


const Root = () => {
    return (
        <div>
            <DaisyNav></DaisyNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;