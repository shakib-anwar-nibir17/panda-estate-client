import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { dateConversion } from "../utils/dateConversion";

const UserListingPage = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        setShowListingsError(false);
        const res = await fetch(`/api/user/listings/${currentUser._id}`);
        const data = await res.json();
        if (data.success === false) {
          setShowListingsError(true);
          return;
        }
        setUserListings(data);
      } catch (error) {
        setShowListingsError(true);
      }
    };

    fetchUserListings();
  }, [currentUser._id]);

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(userListings);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-red-700 mt-5">
        {showListingsError ? "Error showing listings" : ""}
      </p>

      {userListings && userListings.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center mt-7 text-2xl font-semibold">
            My Listings
          </h1>
          <div className="grid grid-cols-3 gap-5">
            {userListings.map((listing) => (
              <article
                className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm p-4"
                key={listing._id}
              >
                <Link to={`/listing/${listing._id}`}>
                  <img
                    src={listing.imageUrls[0]}
                    alt="listing"
                    className="rounded-t-md"
                  />
                </Link>
                <div className="pt-3 ml-4 mr-2 mb-3 space-y-4">
                  <Link to={`/listing/${listing._id}`}>
                    <h3 className="text-xl text-gray-900 font-bold">
                      <span className="text-custom-red-400 mr-2">
                        Property Name:
                      </span>
                      {listing.name}
                    </h3>
                  </Link>
                  <h3 className="font-bold text-gray-900">{listing.address}</h3>
                  <h3 className="font-bold text-gray-900">
                    <span className="text-lime-500 mr-2">Listing Created:</span>
                    {dateConversion(listing.createdAt)}
                  </h3>
                  <div className="space-x-3">
                    <Link to={`/update-listing/${listing._id}`}>
                      <button className="p-3 bg-yellow-500 text-white">
                        Update
                      </button>
                    </Link>

                    <button
                      onClick={() => handleListingDelete(listing._id)}
                      className="p-3 bg-custom-red-500 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserListingPage;
