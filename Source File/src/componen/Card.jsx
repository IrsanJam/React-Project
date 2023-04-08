import { AiFillShop, AiFillAlipayCircle, AiFillAmazonSquare } from "react-icons/ai";

function Card() {
  return (
    <div className="mx-auto h-[40rem] w-full bg-basefont px-36 py-14">
      <p className=" text-center text-[9px] font-bold uppercase text-green-500 lg:mb-3  lg:text-[12px]">join to our programs</p>
      <h3 className="mb-2 text-center font-bold text-basecolor lg:mb-3 lg:mt-3 lg:text-4xl">Choose your Package to Learn</h3>
      <p className=" mb-5 text-center text-[9px] font-bold text-slate-500 lg:text-[12px]">Choose your package when Match for you</p>
      <hr className="mx-auto mb-14 h-[4px] w-[25%] bg-slate-400" />

      <div className=" flex  items-center justify-center gap-14 ">
        <div className="group h-80 flex-1 rounded-lg bg-white px-[-10rem] py-14 text-center shadow-xl duration-300 ease-in-out  hover:scale-110 hover:rounded-md hover:bg-slate-500 hover:text-basefont">
          <AiFillShop size={40} className="mx-auto -mt-[2rem]"></AiFillShop>
          <h3 className="font-bold">Package Start</h3>
          <h1 className="mx-12  border-b-[1px] border-slate-400 py-3 text-4xl font-bold">$39</h1>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn HTML</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn CSS</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn Javascript</p>
          <button className=" mt-5 rounded-xl bg-primary px-5 py-2 text-[10px] font-bold text-black hover:scale-105 group-hover:bg-orange-500 lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>

        <div className="group h-80 flex-1 rounded-lg bg-white px-[-10rem] py-14 text-center shadow-xl duration-300  ease-in-out hover:scale-110 hover:rounded-md hover:bg-slate-500 hover:text-basefont">
          <AiFillAlipayCircle size={40} className="mx-auto -mt-[2rem]"></AiFillAlipayCircle>
          <h3 className="font-bold">Package Middle</h3>
          <h1 className="mx-12  border-b-[1px] border-slate-400 py-3 text-4xl font-bold">$59</h1>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn Git & Github</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn Bootstrap</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn Tailwind CSS</p>
          <button className=" mt-5 rounded-xl bg-primary px-5 py-2 text-[10px] font-bold text-black hover:scale-105 group-hover:bg-orange-500 lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>

        <div className="group h-80 flex-1 rounded-lg bg-white px-[-10rem] py-14 text-center shadow-xl duration-300 ease-in-out  hover:scale-110 hover:rounded-md hover:bg-slate-500 hover:text-basefont">
          <AiFillAmazonSquare size={40} className="mx-auto -mt-[2rem]"></AiFillAmazonSquare>
          <h3 className="font-bold">Package Finishing</h3>
          <h1 className="mx-12  border-b-[1px] border-slate-400 py-3 text-4xl font-bold">$89</h1>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn API</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn React JS</p>
          <p className="mx-12 border-b-[1px] border-slate-400 py-[4px] text-sm">Learn Deployment</p>
          <button className=" mt-5 rounded-xl bg-primary px-5 py-2 text-[10px] font-bold text-black hover:scale-105 group-hover:bg-orange-500 lg:px-14 lg:py-2 lg:text-[14px] ">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
