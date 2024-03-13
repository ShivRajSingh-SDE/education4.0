import { Link } from "react-router-dom";
import Back from "../components/common/back/Back";

const AdminNavBar = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col shadow-md bg-gradient-to-r from-purple-400 to-pink-500 hover:shadow-lg transition-shadow duration-300">
      <Back title="Admin" />
      <h1 className=" text-center">Admin Links</h1>

      <div className="mt-4  flex flex-row space-x-4 justify-center items-center">
        <Link
          to="/admin/course"
          className="block text-[#16a4db9a] hover:text-gray-300 mb-2 text-center font-bold text-lg"
        >
          Courses
        </Link>
        <Link
          to="/admin/roadmap"
          className="block text-[#16a4db9a] hover:text-gray-300 mb-2 text-center font-bold text-lg"
        >
          Roadmap
        </Link>
        <Link
          to="/admin/test-notes"
          className="block text-[#16a4db9a] hover:text-gray-300 text-center font-bold text-lg"
        >
          Test Notes
        </Link>
        <Link
          to="/admin/notification"
          className="block text-[#16a4db9a] hover:text-gray-300 text-center font-bold text-lg"
        >
          Notification
        </Link>
      </div>
    </div>
  );
};

export default AdminNavBar;
