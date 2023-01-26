const TagButton = ({ tags }) => {
  return (
    <div className=" bg-gray-100 border-none rounded-2xl w-fit m-4 overflow-hidden cursor-pointer">
      <p className=" p-2 align-middle">{tags.title ? tags.title : tags}</p>
    </div>
  );
};

export default TagButton;
