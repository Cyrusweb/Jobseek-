import React from "react";
import insta from "../../assets/Symbol_inta.svg";
import facebook from "../../assets/Symbol_face.svg";
import linkdine from "../../assets/Symbol_in.svg";
import youtube from "../../assets/Symbol_you.svg";
import location from "../../assets/location.svg";
import logo from "../../assets/Link.svg";
function Footer() {
  return (
    <>
      <main className="rounded-lg md:mx-[3.4rem] p-3 md:m-auto m-[0.27rem]">
        <footer className="md:grid grid-cols-2 gap-8">
          <article className="border-[1px]  md:mt-16 p-4 border-[#322E4C] text-white rounded-lg">
            <h1 className="mb-2">subscribe</h1>
            <p className="text-[#848484] mb-2 text-[10px]">
              Stay current with all thinks JobSeek
            </p>
            <div className="  my-[15px]   relative ">
              <article className="border-[1px] px-4 py-3  border-[#27213C] flex items-center rounded-full">
                <input
                  type="text"
                  className="bg-transparent focus:outline-none placeholder:text-[14px] placeholder:text-[#848484] pl-1  text-white"
                  placeholder="Email"
                />
                <button className="bg-white  ml-16 py-2 absolute right-[1rem]  gap-2  px-4  flex items-center rounded-full ">
                  <p className="font-[400] text-[10px] text-black">Subscribe</p>
                </button>
              </article>
            </div>
          </article>

          <section className="flex items-center gap-2 mt-4 justify-between">
            <div className="text-[#848484] ">
              {/* list_1 */}
              <ul className="flex  flex-col gap-2">
                <li className="text-white">company</li>
                <li>about</li>
                <li>Our team</li>
                <li>jobs</li>
              </ul>
            </div>
            <div className="text-[#848484]    ">
              {/* list_2 */}
              <ul className="flex  flex-col gap-2">
                <li className="text-white">Resources</li>
                <li>news</li>
                <li>FAQs</li>
                <li>Candidates</li>
              </ul>
            </div>
            <div className="text-[#848484]  ">
              {/* list_3*/}
              <ul className="flex  flex-col gap-2">
                <li className="text-white text-[17px]">contacts</li>
                <li>CV post</li>
                <li>job post</li>
                <li>contact</li>
              </ul>
            </div>
          </section>
        </footer>

        {/* logo sec */}
        <article className=" md:grid  grid-cols-2 justify-between  mt-16">
          <div className="md:justify-start justify-center flex mb-4">
            <figure>
              <img src={logo} alt="logo" className="object-cover" />
            </figure>
          </div>
          <div className="flex gap-12 justify-center">
            <figure>
              <img src={facebook} alt="facebook_icon" />
            </figure>
            <figure>
              <img src={youtube} alt="youtube_icon" />
            </figure>
            <figure>
              <img src={location} alt="location_icon" />
            </figure>
            <figure>
              <img src={insta} alt="insta_icon" />
            </figure>
            <figure>
              <img src={linkdine} alt="linkdine_icon" />
            </figure>
          </div>
        </article>
      </main>
    </>
  );
}

export default Footer;
