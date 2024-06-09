const ReviewCard = ({ name, image, content }) => {
  return (
    <div className="min-w-[340px] min-h-[230px] border border-slate-300 rounded-lg shadow-buttonShadow p-4 flex gap-4">
      <div className="w-[30%] flex justify-center items-center">
        <img
          src={image}
          alt="photo profile"
          className="w-20 h-20 rounded-full lg:w-40 lg:h-40"
        />
      </div>
      <div className="w-[70%] flex flex-col justify-center">
        <p className="text-sm">
          <span className="text-primary">"</span>
          {content}
          <span className="text-primary">"</span>
        </p>
        <p className="font-bold mt-4">{name}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
