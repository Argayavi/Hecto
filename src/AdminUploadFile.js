import "./AdminUploadFile.css"
import { MdUpload } from "react-icons/md";
function AdminUploadFile() {
    return<>
  <div className="AdminUploadFile_body">

    <div className="AdminUploadFile_text">
<label> Drop Files Here or Select</label>
    </div>
    <div className="AdminUploadFile_button">
<button><MdUpload style={{ color: "white", fontSize: "1.5rem" }} /> </button>
    </div>
    </div>  
    </>
}
export default AdminUploadFile;