import { useState } from "react";
import Flexbox from "./Flexbox";
import Ref from "./Ref";

const Home = ({a=20}) => {
  const [title, setTitle]=useState([
    'facebook','google','amazon',9879879
  ])
  const title1=title
 

  // const arr=['yfyufuy','uyyuguyu','uyyuuy',{name:['jkskfds','sgfjgjdshhjf'] },20]
  // console.log(arr[3].name);
  return (
    <>
    {/* <div className="text-xl font-semibold">
      dsifksjdfhkjsdhfuhkkhsd
    </div>
    <div className="text-center">
    <Ref link="https://www.facebook.com/" title={title1}/>
    <div className="mx-4 backdrop-blur-sm bg-gray-50 flex justify-between items-center py-1 px-3 w-60 border border-[#bfbbbb] shadow-md">
      <div className="text-center text-xs text-black">hello welcome js course</div>
      <span className="my-3 p-1 bg-blue-500 text-xs text-white font-semibold rounded-sm text-center">
        Stop Sharing
      </span>
    </div>
    </div> */}
    <Flexbox/>
    </>
  );
};

export default Home;
