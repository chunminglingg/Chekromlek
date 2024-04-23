import React from "react";
import  FormPost  from "../FormPost";
interface ModalProps {
  setModalState: (state: boolean) => void;
}
const ShowModal: React.FC<ModalProps> = (props) => {
  return (
    <div className="">
      <div className="fixed inset-3 flex justify-center items-center z-10 max-sm:w-auto  max-sm:translate-x-42 max-sm:mt-[9%] ">
        <div className=" bg-white w-[550px] h-[450px] max-sm:w-[350px] max-sm:h-[420px] text-black items-center justify-center border rounded-md border-gray-400">
          <button
            onClick={() => props.setModalState(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            </svg>
          </button>
          <div className="flex items-center justify-center">
            <FormPost/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
