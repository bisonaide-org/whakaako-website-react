import React from "react";
import checkList from "../../../../public/photos/02_ForTalents/JoinTheCommunityPhotos/checkList.svg";
import form from "../../../../public/photos/02_ForTalents/JoinTheCommunityPhotos/form.svg";
import phone from "../../../../public/photos/02_ForTalents/JoinTheCommunityPhotos/phone.svg";
import Image from "next/image";

const Paragraph = () => {
  return (
    <div className="flex flex-col items-center text-grayBodtText px-5 pt-16 pb-14 md:px-5">
      <div className="flex flex-col md:flex-row items-center gap-7 max-w-5xl">
        <Image className="py-4" src={checkList} width={70} height={100} alt="" />

        <div className="flex flex-col text-p gap-2">
          <p>
            Let's kickstart your journey to become a part of Oakyard. Your first
            step is to complete our registration form, and don't worry, it's a
            quick process. By sharing your contact information, you can be
            confident that you won't miss any updates, even if you need to take
            a break during the application.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-7 max-w-5xl">
        <Image className="py-4"  src={form} width={70} height={280} alt="" />
        <div className="flex flex-col text-p gap-2">
          <p>
            To make your application as smooth as possible, we recommend having
            your most up-to-date resume written in English. It's essential for
            us to gain a comprehensive understanding of your skills and
            experience to ensure they align with our requirements.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-7 max-w-5xl">
        <div>   </div>
        <Image className="py-4" src={phone} width={50} height={280} alt="phone" />
        <div className="flex flex-col text-p gap-2 ms-4 sm:ms-0">
          <p  className="pb-4" >
            We've designed a straightforward and efficient selection process.
            Once your application is reviewed, and you meet Oakyard's Membership
            criteria, you'll be scheduled for a discussion with one of our
            dedicated Talent Agents. During this conversation, your profile and
            skills will be assessed. If it's a perfect fit, you'll receive an
            invitation to join our vibrant community.
          </p>
        
        </div>
      </div>
      <div className="flex flex-col text-p max-w-5xl mt-10 ms-24 sm:ms-0">
      <p className="">
          We'll keep you updated throughout the entire process, so you'll always
          be informed about the status of your application.
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
