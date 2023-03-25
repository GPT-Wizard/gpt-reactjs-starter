function Loader({ small }) {
  const size = small ? 'circle' : 'large-circle';
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex justify-center my-2 px-10">
        <span className={`${size} animate-loader`}></span>
        <span className={`${size} animate-loader animation-delay-200`}></span>
        <span className={`${size} animate-loader animation-delay-400`}></span>
      </div>
    </div>
  );
}

export default Loader;
