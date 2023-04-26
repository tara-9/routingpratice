import { Link } from "react-router-dom"
function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <p>Go To <Link to="/products">Product</Link> Page</p>
        </div>
    )
}
export default HomePage