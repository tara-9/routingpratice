import { Outlet } from "react-router-dom"
import NavigationBar from "../components/MainNavigationBar"
import classes from "./Root.module.css"
function RootLayOut() {
    return (
        <>
        <NavigationBar />
        <main className={classes.content}>
            <Outlet />
        </main>
        </>
    )
    
}

export default RootLayOut