interface ProductModalInterface {
  setModalOn: any;
  form: any;
  modalExtraButton?: any;
}

export default function Modal(props: ProductModalInterface) {
  const setModalOn = props.setModalOn;

  const handleCancelClick = () => {
    setModalOn(false);
  };

  return (
    <>
      <div className="   bg-zinc-200 opacity-90 fixed inset-0 z-50   ">
        <div className="flex h-screen justify-center items-center ">
          <div className="flex-col justify-center  bg-white py-24 px-48 border-4 border-gray-500 rounded-xl ">
            <div>
              <form action="">
                <div className="flex-col">{props.form}</div>
              </form>
              <div className="flex justify-center">
                {props.modalExtraButton}
                <button
                  onClick={handleCancelClick}
                  className="rounded px-4 py-2 ml-4 text-white bg-blue-500 "
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
