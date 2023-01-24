const TagButton = ({ snippet }) => {
  return (
    <div className=" bg-gray-100 border-none rounded-2xl w-fit m-4 overflow-hidden cursor-pointer">
      <p className=" p-2 align-middle">{snippet.title}</p>
    </div>
  );
};

export default TagButton;
