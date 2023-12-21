

type TProps = {
    children : React.ReactNode;
    onCloseModal : ()=>void;
}
const ContainerModal = (props:TProps) => {
    const { children, onCloseModal, }= props

  return (
    <article className="h-full z-[99] w-full fixed top-0 left-0 flex backdrop-invert backdrop-opacity-5 bg-black/20 items-center justify-center">
      <div className={'p-5'}>
        <header className="sticky top-0  ">
          <button
            onClick={onCloseModal}
            className="p-2 h-8 w-8 cursor-pointer flex rounded-full "
          >
            X
          </button>
        </header>
        <section className="">{children}</section>
      </div>
    </article>
  );
};

export default ContainerModal;
