import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
import reply from "../assets/icon-reply.svg";
import dele from "../assets/icon-delete.svg";
import edit from "../assets/icon-edit.svg";
import { data2 } from "../utilis";

function Data2() {
  return (
    <div>
      {data2?.map((item, index) => {
        return (
          <div key={index} className=" flex justify-between">
            <div className="border-l-2 border-gray-400 h-18 flex justify-center mx-auto"></div>
            <div className="w-11/12">
              <div className="bg-white block md:flex items-center bg-white-500 p-5 shadow-sm shadow-gray-500 rounded-lg mt-3  ">
                <div className="hidden md:block md:bg-lightGray md:p-4 md:py-5 md:rounded-lg md:mr-3 ">
                  <img src={plus} alt="" className="pb-2" />
                  <p className="">4</p>
                  <img src={minus} alt="" className="pt-2" />
                </div>
                <div className="text-start">
                  <div className=" flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt="user image"
                          className="w-10  "
                        />

                        <span className="pr-2 pl-2 text-darkBlue">
                          {item.name}
                        </span>
                        {item.buttonText && (
                          <button className="text-white bg-blue-500 py-0.5 mx-2 rounded-sm px-2">
                            {item.buttonText}
                          </button>
                        )}
                      </div>

                      <span className="grayishBlue">{item.date}</span>
                    </div>
                    {item.flag === true ? (
                      <div className=" hidden md:visible md:flex md:items-center ">
                        <img src={dele} alt="" />
                        <h2 className="pr-3 pl-3 text-red-500">Delete</h2>
                        <img src={edit} alt="" className="" />
                        <h2 className=" pr-3 pl-3 text-blue-500">Edit</h2>
                      </div>
                    ) : (
                      <div>
                        <div className="hidden md:visible md:flex md:items-center ">
                          <img src={reply} alt="" className="cursor-pointer" />
                          <h2 className="pl-3 text-blue-500">Reply</h2>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-grayishBlue">
                    <a href="#" className="text-blue-500 pr-2 ">
                      @ramsesmiron
                    </a>
                    Impressive! Though it seem the rag feature could be improved
                    But overall it
                    {/* </p> */}
                    {/* <p> */}
                    look incridible. You've nailed the design and the
                    responsiveness at various
                    {/* </p> */}
                    {/* <p> */}
                    breakpoint works really well.
                  </p>
                </div>
                <div className="md:hidden  mt-4 flex justify-between">
                  <div className="flex justify-between items-center bg-lightGray py-3 px-5 rounded-lg  mr-3">
                    <img src={plus} alt="" className="pr-3 cursor-pointer" />
                    <h2>4</h2>
                    <img src={minus} alt="" className="pl-3 cursor-pointer" />
                  </div>
                  <div className="flex items-center">
                    <img src={dele} alt="" />
                    <h2 className="pr-3 pl-3 text-red-500">Delete</h2>
                    <img src={edit} alt="" className="" />
                    <h2 className=" pr-3 pl-3 text-blue-500">Edit</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Data2;
