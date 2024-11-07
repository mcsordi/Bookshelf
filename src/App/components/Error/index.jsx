function Error() {
  return (
    <section className="bg-slate-300 flex flex-col items-center  w-full min-h-screen">
      <div className="flex flex-col h-full justify-center items-center ">
        <div className="w-[550px] h-[353px] bg-error"></div>
        <h2 className="max-w-72 mx-auto text-2xl font-medium">Um Erro ocorreu, por favor recarregue a página</h2>
      </div>
    </section>
  );
}
export default Error;
