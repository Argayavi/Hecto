import "./AdminUploadUrl.css"
import { AiOutlineArrowRight } from "react-icons/ai";



function AdminUploadUrl() {
    return<>
  <div className="AdminUploadUrl_body">
<div className="AdminUploadUrl_l1">
<label> Upload File by Link</label>
</div>

<div className="AdminUploadUrl_l2">
<div className="AdminUploadUrl_textbox">
<input type="text" placeholder="Add URL"/>
</div>
<div className="AdminUploadUrl_button">
<button><AiOutlineArrowRight style={{ color: " #8092B5", fontSize: "1.5rem" }} /> </button>
</div>
</div>

    </div>  
    </>
}
export default AdminUploadUrl;