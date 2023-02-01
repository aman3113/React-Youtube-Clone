const TagButton = ({ tags }) => {
  return (
    <div className=" bg-gray-100 border-none rounded-2xl  m-4 p-3 min-w-[70px] cursor-pointer">
      <p className=" align-middle text-center">
        {tags.title ? tags.title : tags}
      </p>
    </div>
  );
};

export default TagButton;
