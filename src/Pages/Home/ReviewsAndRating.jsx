import { useState, useEffect } from "react";

const ReviewsAndRating = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    comment: "",
  });
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://simple-services-server.vercel.app/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [loading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://simple-services-server.vercel.app/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newReview, serviceId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setReviews((prevReviews) => [...prevReviews, data]);
        setNewReview({ name: "", rating: "", comment: "" });
        setLoading((prev) => !prev);
      });
  };

  return (
    <div className="bg-gray-300 p-10">
      <h2 className="text-2xl font-bold mb-4">Reviews and Ratings</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">
              Name:
            </label>
            <input
              className="py-2 rounded-sm"
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rating" className="mb-2">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleChange}
              min="1"
              max="5"
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="comment" className="mb-2">
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              value={newReview.comment}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
      <h3 className="text-xl font-semibold mt-6">Existing Reviews:</h3>
      <div className="mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded shadow">
            <p className="font-bold">Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Name: {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsAndRating;
