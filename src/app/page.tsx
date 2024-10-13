import React from "react";
import CARD from "./card/page";
import Image from "next/image";

function HOME() {
  return (
    <div>
      <div className="text-xl font-bold">
        <div className="bg-indigo-50  h-auto  w-2/4 m-auto  border-2 border-cyan-400 rounded-lg shadow-lg  justify-between  ">
          <h1 className="flex justify-center  bg-blue-900 text-white">
            STUDENT ID CARD
          </h1>
          <div className="flex pt-10 pl-14 pb-10 pr-6 ">
            <CARD
              name="Zarmain Ahmed"
              age="17years"
              roll={404211}
              class="Monday 09:00 to 12:00pm"
              center=" Governor House (GIAIC) Karachi,"
            />
            <div className="z-10 ">
              <Image
                src={"/hijabi.png"}
                alt={"profile picture"}
                width={150}
                height={150}
                className="ml-40 rounded-lg border-2 "
              />
            </div>
          </div>
          <p className="border-t-2 boder-t-salte-400 font-bold text-sky-500 text-2xl mt-auto flex  justify-end mr-7 ml-96">
            Authorized Signature
          </p>

          <div>
            <button className=" relative w-96 h-7 p-1 border-2 border-grey-300 bg-blue-900  text-slate-200 items-center justify-center flex">
              <span
                className=" absolute inset-0 bg-slate-500 "
                style={{ width: "50%" }}
              ></span>
              <span className="z-10 ">Q1 & WMD</span>
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="text-xl font-bold">
        <div className="bg-indigo-50  h-auto  w-2/4  m-auto  border-2 border-cyan-400 rounded-lg shadow-lg  justify-between  ">
          <h1 className="flex justify-center  bg-blue-900 text-white">
            STUDENT ID CARD
          </h1>
          <div className="flex pt-10 pl-16 pb-10 pr-6 ">
            <CARD
              name="Shahla Ahmed"
              age="22years"
              roll={40657}
              class="Friday 02:00 to 05:00pm"
              center="Governor House (GIAIC) Karachi,"
            />
            <div className="z-10">
              <Image
                src={"/hijabi.png"}
                alt={"profile picture"}
                width={150}
                height={150}
                className="ml-40 rounded-lg border-2"
              />
            </div>
          </div>
          <p className="border-t-2 boder-t-salte-400 font-bold text-sky-500 text-2xl mt-auto flex  justify-end mr-7 ml-96 ">
            Authorized Signature
          </p>

          <div>
            <button className=" relative w-96 h-7 p-1 border-2 border-grey-300 bg-blue-900 text-slate-200 items-center justify-center flex">
              <span
                className=" absolute inset-0 bg-slate-500 "
                style={{ width: "50%" }}
              ></span>
              <span className="z-10">Q2 & WMD</span>
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>

      <br />
      <br />
      <div className="text-xl font-bold">
        <div className="bg-indigo-50  h-auto  w-2/4  m-auto  border-2 border-cyan-400 rounded-lg shadow-lg  justify-between  ">
          <h1 className="flex justify-center bg-blue-900 text-white">
            STUDENT ID CARD
          </h1>
          <div className="flex pt-10 pl-16 pb-10 pr-6 ">
            <CARD
              name="Shereen Ahmed"
              age="23years"
              roll={406332}
              class="Wednesday 09:00 to 12:00pm"
              center="Governor House (GIAIC) Karachi,"
            />
            <div className="z-10">
              <Image
                src={"/hijabi.png"}
                alt={"profile picture"}
                width={150}
                height={150}
                className="ml-40 rounded-lg border-2"
              />
            </div>
          </div>
          <p className="border-t-2 boder-t-salte-400 font-bold text-sky-500 text-2xl mt-auto  flex  justify-end mr-7 ml-96">
            Authorized Signature
          </p>

          <div>
            <button className=" relative w-96 h-7 p-1 border-2 border-grey-300 bg-blue-900 text-slate-200 items-center justify-center flex">
              <span
                className=" absolute inset-0 bg-slate-500 "
                style={{ width: "50%" }}
              ></span>
              <span className="z-10">Q1 & WMD</span>
            </button>
          </div>
        </div>
        <br />
        <br />
      </div>

      <br />
    </div>
  );
}

export default HOME;
