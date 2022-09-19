import { render } from "react-dom";
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from './Header';
import Discountitem from './Discountitem';
import Latestblog from './Latestblog';
import Subbanner from './Subbanner';
import GridView from './GridView';
import BrandList from './BrandList';
import Login from './Login';
import AdminLeftBar from './AdminLeftBar';
import ProductDescription from './ProductDescription';

function Navigation() {
    return <>
        < HashRouter>
            <Routes>
                <Route path="/Header" element={<Header />}> </Route>
                <Route path="/Discountitem" element={<Discountitem />}> </Route>
                <Route path="/Latestblog" element={<Latestblog />}> </Route>
                <Route path="/Subbanner" element={<Subbanner />}> </Route>
                <Route path="/GridView" element={<GridView />}> </Route>
                <Route path="/BrandList" element={<BrandList />}> </Route>
                <Route path="/Login" element={<Login />}> </Route>
                <Route path="/ProductDescription" element={<ProductDescription />}> </Route>
                <Route path="/AdminLeftBar" element={<AdminLeftBar />}> </Route>

            </Routes>
        </HashRouter>




    </>
}
export default Navigation;