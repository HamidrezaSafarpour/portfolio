function PagesLanding({ title, text }) {
  return (
    <>
      <section className="flex justify-center items-center w-full h-[100vh] bg-black">
        <div className="flex flex-col gap-4 justify-center items-center text-white">
          <h1 className="font-bold box-content text-center m-6 max-[350px]:text-4xl text-5xl md:text-6xl cursor-default">{title}</h1>
          <h2 className="max-[400px]:text-2xl max-sm:text-3xl text-4xl cursor-default">{text}</h2>
        </div>
      </section>
    </>
  );
}

export default PagesLanding;
