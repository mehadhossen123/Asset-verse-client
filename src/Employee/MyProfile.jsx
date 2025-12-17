
import { Link } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loading/Loader";
import Navbar from "../Components/Navbar/Navbar";
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../Hooks/useAxiosSecure";
import PageWarper from "../CustomItem/PageWarper";

const MyProfile = () => {
  const { user, loading } = useAuth();
   const axiosSecure=useAxiosSecure()
 
 const { data: items = [] } = useQuery({
   queryKey: ["affiliations", user?.email],
   enabled: !!user?.email,
   queryFn: async () => {
     const res = await axiosSecure.get(`/affiliations/affiliationsCompany?email=${user?.email}`);
     return res.data.data;
   },
 });
 console.log(items)
  if (loading) {
    return <Loader></Loader>;
  }

  const defaultPhotoUrl =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <PageWarper>
      <div className="bg-black min-h-screen  mt-24">
        <div className="flex justify-center p-5">
          <div className="bg-white shadow-xl rounded-xl p-5 w-full max-w-md transform transition duration-400 hover:scale-[1.01]">
            <div className="flex flex-col items-center border-b pb-5 mb-5">
              <img
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
                src={user?.photoURL || defaultPhotoUrl}
                alt="Profile Picture"
              />

              <h1 className="text-3xl font-bold mt-4 text-gray-800">
                {user?.displayName || "User Name"}
              </h1>
              <p className="text-md text-gray-500 font-medium">
                {user?.email || "Email Not Available"}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
                Account Details
              </h2>

              <div className="flex justify-between items-center text-gray-600">
                <span className="font-medium flex items-center">
                  📅 Member Since:
                </span>
                <span>
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center text-gray-600">
                <span className="font-medium flex items-center">
                  Affiliations Company :
                </span>
                <span>
                  {items.map((item, i) => (
                    <p className="font-bold text-black" key={i}>
                      {item.companyName}
                    </p>
                  ))}
                </span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                to={"/auth/update"}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWarper>
  );
};

export default MyProfile;
