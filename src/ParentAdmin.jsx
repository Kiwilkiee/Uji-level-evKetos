import { Outlet } from "react-router-dom";
import SidebarComponent from "./Component/SidebarComponent";

export default function ParentAdmin() {
    return (
        <div>
            <SidebarComponent />
            <Outlet />
        </div>
    )
}