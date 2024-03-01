import { Outlet } from "react-router-dom";
import "./assets/css/user.css";

export default function ParentUser() {
    return (
        <div className="body-front">
            <Outlet />
        </div>
    )
}