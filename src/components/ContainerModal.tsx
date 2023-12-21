

type TProps = {
    children : React.ReactNode;
    onCloseModal : ()=>void;
}
const ContainerModal = (props:TProps) => {
    const { children, onCloseModal, }= props

  return (
    <article 
      className="h-full z-[99] w-full fixed top-0 left-0 flex backdrop-invert backdrop-opacity-5 bg-black/20 items-center justify-center"
      onClick={onCloseModal} 
    >
      <div className={' bg-white p-3'} onClick={(e)=>e.stopPropagation()}>
        <header className="sticky top-0  ">
          <button
            onClick={onCloseModal}
            className=" text-sm items-center justify-center cursor-pointer flex rounded-full ml-auto"
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
