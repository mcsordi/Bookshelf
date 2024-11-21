import Container from '../general/Container';

function ErrorInitial() {
  return (
    <Container>
      <div className="flex flex-col mx-auto my-auto gap-5">
        <img src="./images/404.svg" />
        <div className=" gap-3 flex flex-col items-center justify-center font-nunito">
          <h1 className="text-7xl font-light">404</h1>
          <p className="text-xl font-medium">Página não disponivel</p>
        </div>
      </div>
    </Container>
  );
}
export default ErrorInitial;
