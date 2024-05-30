
import ReviewsAndRating from './ReviewsAndRating';

const ExtraSection4 = ({ serviceId }) => {
  return (
    <div>
      <h1 className="text-6xl text-center text-green-500 font-semibold">Reviews and Rating</h1>
      <ReviewsAndRating serviceId={serviceId} />
    </div>
  );
};

export default ExtraSection4;
