function Modal({ children }) {
  return (
    <div className=" fixed h-screen w-screen left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4 bg-gray-200/75 	 flex justify-center items-center  gap-2 p-6 rounded-md shadow-md  dark:text-gray-800 z-[90]">
      <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
        {children}
      </div>
    </div>
  );
}

export default Modal;
