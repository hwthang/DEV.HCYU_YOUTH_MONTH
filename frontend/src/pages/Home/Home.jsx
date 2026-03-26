import React, { useEffect, useRef, useState } from "react";
import {
  FacebookLogo,
  HcyuLogo,
  HomeActivitiesPic1,
  HomeActivitiesPic2,
  HomeActivitiesPic3,
  HomeActivitiesPic4,
  HomeActivitiesPic5,
  HomeActivitiesPic6,
  HomeActivitiesPic7,
  HomeActivitiesPic8,
  HomeContactPic1,
  HomeContactPic2,
  HomeContactPic3,
  HomeHeroPic1,
  HomeIntroPic1,
  HomeIntroPic2,
  HomeIntroPic3,
  HomeIntroPic4,
  HomeIntroPic5,
  HomeTeamPic4,
  HomeTeamsPic1,
  HomeTeamsPic2,
  HomeTeamsPic3,
  LogoDongB,
} from "../../assets/images";
import { scrollToId } from "../../utils/UxHelper";
import { Menu, X } from "lucide-react";

const MENU = [
  { id: "hero-section", label: "Trang chủ" },
  { id: "intro-section", label: "Giới thiệu" },
  { id: "teams-section", label: "Đội ngũ" },
  { id: "activities-section", label: "Hoạt động" },
  { id: "contact-section", label: "Liên hệ" },
];

const MEMBERS = [
  {
    avatar: HomeTeamsPic3,
    name: "Nguyễn Ngọc Mỹ Tâm",
    position: "Phó Bí thư chi đoàn",
    university: (
      <>
        Trường Đại học <br /> Khoa học Xã hội và Nhân văn
      </>
    ),
    major: "Ngành Địa lý học",
    fix: "object-[center_30%]",
  },
  {
    avatar: HomeTeamPic4,
    name: "Đặng Hữu Thắng",
    position: "Bí thư chi đoàn",
    university: "Trường Đại học Công nghệ Thông tin",
    major: "Ngành Kỹ thuật phần mềm",
    highlight: true,
  },
  {
    avatar: HomeTeamsPic2,
    name: "Lê Thị Bích Ngọc",
    position: "Ủy viên Ban Chấp hành",
    university: "Trường Đại học Thủ Dầu Một",
    major: "Ngành Truyền thông đa phương tiện",
  },
];

const ACTIVITIES = [
  {
    img: HomeActivitiesPic1,
    content:
      "CHƯƠNG TRÌNH VỀ NGUỒN NHÂN KỶ NIỆM 78 NĂM NGÀY THƯƠNG BINH LIỆT SĨ",
  },
  {
    img: HomeActivitiesPic2,
    content: "HỖ TRỢ NGƯỜI DÂN SỐ HOÁ THỦ TỤC HÀNH CHÍNH",
  },
  {
    img: HomeActivitiesPic3,
    content: "“BƯỚC CHÂN THIỆN NGUYỆN” – Lan tỏa yêu thương ",
  },
  {
    img: HomeActivitiesPic4,
    content: "THỨ 7 VĂN MINH ĐÔ THỊ",
  },
  {
    img: HomeActivitiesPic5,
    content: "ĐẠI HỘI CHI ĐOÀN KHU PHỐ ĐÔNG B NHIỆM KỲ 2025 - 2026",
  },
  {
    img: HomeActivitiesPic6,
    content: "ĐÊM HỘI TRĂNG RẰM 2025",
  },
  {
    img: HomeActivitiesPic7,
    content:
      "CHƯƠNG TRÌNH “TẾT SUM VẦY, XUÂN LAN TỎA” – CHÀO XUÂN BÍNH NGỌ 2026",
  },
  {
    img: HomeActivitiesPic8,
    content: "CHƯƠNG TRÌNH “ĐỒNG HÀNH CÙNG THANH NIÊN NHẬP NGŨ” NĂM 2026",
  },
];

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);
  const handleScrollToId = (id) => {
    scrollToId(id);
    setOpenMenu(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerRefLeft = useRef(null);
  const containerRefRight = useRef(null);

  useEffect(() => {
    const el = containerRefLeft.current;
    if (!el) return;

    let x = 0;
    const speed = 0.5;
    let raf;
    let isHover = false;

    const handleEnter = () => (isHover = true);
    const handleLeave = () => (isHover = false);

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    const animate = () => {
      if (!isHover) {
        x -= speed;
      }

      const halfWidth = el.scrollWidth / 2;

      if (Math.abs(x) >= halfWidth) {
        x = 0;
      }

      el.style.transform = `translateX(${x}px)`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const el = containerRefRight.current;
    if (!el) return;

    let x = -el.scrollWidth / 2;
    const speed = 0.5;
    let raf;
    let isHover = false;

    const handleEnter = () => (isHover = true);
    const handleLeave = () => (isHover = false);

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    const animate = () => {
      if (!isHover) {
        x += speed;
      }

      const halfWidth = el.scrollWidth / 2;

      if (x >= 0) {
        x = -halfWidth;
      }

      el.style.transform = `translateX(${x}px)`;

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="relative z-0 flex flex-col w-full">
      <div className="sticky top-0 z-90 h-0 w-full transition-all duration-[500ms] ">
        <div className="absolute top-0 h-24 w-full bg-white/90 backdrop-blur-sm shadow-md">
          <div className="h-full w-full flex items-center justify-between px-4 lg:px-12">
            <div className="h-full w-full flex items-center justify-start p-2 gap-2">
              <img src={LogoDongB} className="h-full object-contain" />
              <div className="flex flex-col items-center justify-center md:items-start trasition-all duration-800">
                <div className="text-[9px] md:text-xs text-nowrap font-semibold text-blue-900">
                  Đoàn TNCS Hồ Chí Minh
                </div>
                <div className="text-nowrap font-extrabold text-xl text-blue-600 uppercase">
                  Khu phố Đông B
                </div>
                <div className=" text-[9px] md:text-xs text-nowrap font-semibold text-blue-900">
                  Đoàn kết - Xung kích - Tình nguyện - Sáng tạo
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-full items-center justify-end gap-2 font-semibold text-blue-800">
              {MENU.map((item) => (
                <div key={item.id}>
                  <button
                    className="w-28 cursor-pointer hover:-translate-y-1 border-b-2 border-white/10 hover:border-blue-800 transition-all duration-800"
                    onClick={() => handleScrollToId(item.id)}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex lg:hidden">
              {openMenu ? (
                <div onClick={handleCloseMenu}>
                  <X />
                </div>
              ) : (
                <div onClick={handleOpenMenu}>
                  <Menu />
                </div>
              )}
            </div>
          </div>
          <div
            className={`${
              openMenu ? "max-h-60" : "max-h-0"
            } overflow-hidden transition-all duration-500 lg:hidden flex flex-col gap-2 bg-white/90 backdrop-blur-sm`}
          >
            {MENU.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToId(item.id)}
                className="text-left px-4 py-2 hover:bg-gray-100 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col relative z-10">
        <div
          id="hero-section"
          className="relative z-0 lg:h-screen h-screen lg:pt-24 pt-40 pb-16 lg:pb-0"
        >
          <div
            className={`absolute top-0 w-full z-10 transition-all duration-[3000ms] ${
              mounted
                ? "translate-y-24 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <img src={HomeHeroPic1} className="h-full w-full object-cover" />
          </div>

          <div
            className={`absolute inset-x-0 bottom-0 w-full z-0 transition-all duration-[3000ms] rotate-180 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <img src={HomeHeroPic1} className="h-full w-full object-cover" />
          </div>
          <div
            className={`relative z-30 flex flex-col h-full gap-2 lg:gap-6 items-center justify-center text-center transition-all duration-[3000ms] px-8 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="lg:text-3xl text-xl font-extrabold tracking-wide text-blue-800">
              Công trình thanh niên
            </div>
            <div className="lg:text-6xl text-2xl font-bold uppercase bg-linear-to-r bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent py-1 md:leading-18 font-extrabold text-nowrap">
              Nền tảng truyền thông <br /> Chi đoàn khu phố Đông B
            </div>
            <div className="md:text-xl text-sm text-blue-800 font-semibold">
              Kết nối đoàn viên, lan tỏa giá trị tích cực <br />
              Đưa hoạt động đoàn đến gần với thanh niên thời đại số
            </div>

            <button
              className="lg:text-xl font-semibold border h-12 px-6 rounded-full 
bg-gradient-to-r hover:scale-98
text-white transition-all duration-300 from-blue-500 via-sky-500 to-cyan-400 mt-4 md:mt-0"
              onClick={() => handleScrollToId("intro-section")}
            >
              Khám phá
            </button>
          </div>
        </div>
        <div
          id="intro-section"
          className="min-h-fit h-screen w-full pt-30 flex items-center flex-col lg:flex-row md:px-16 gap-8 md:gap-16 relative z-0 overflow-hidden px-8 md:px-0 bg-linear-to-r from-cyan-200 to-blue-300 pb-24"
        >
          <div
            className={`absolute inset-x-0 bottom-0 left-0 w-full -z-120 transition-all h-full duration-[3000ms] ${
              mounted ? "translate-y-0 opacity-70" : "translate-y-4 opacity-0"
            }`}
          >
            <img src={HomeIntroPic1} className="h-full w-full object-cover" />
          </div>
          <div className="flex-2 flex flex-col gap-4 bg-white/60 px-8 pb-8 backdrop-blur-sm rounded-xl">
            <div className="text-2xl md:text-4xl font-extrabold bg-linear-to-r bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent text-center md:text-left font-playwrite pt-8">
              Kết nối thanh niên
            </div>
            <div className="text-justify">
              Nhân kỷ niệm 95 năm Ngày thành lập Đoàn TNCS Hồ Chí Minh, Chi đoàn
              Khu phố Đông B xây dựng nền tảng truyền thông nhằm kết nối đoàn
              viên, cập nhật hoạt động và lan tỏa tinh thần xung kích, sáng tạo
              của tuổi trẻ.
            </div>
            <div className="text-justify">
              Bên cạnh đó, nền tảng còn là nơi lưu giữ và lan tỏa những hình
              ảnh, câu chuyện đẹp về hoạt động của tuổi trẻ, góp phần truyền cảm
              hứng và khơi dậy tinh thần cống hiến trong đoàn viên, thanh niên.
              Đây cũng là cầu nối giúp tăng cường sự gắn kết giữa tổ chức Đoàn
              với thanh niên, hướng tới xây dựng cộng đồng đoàn kết, văn minh và
              phát triển bền vững.
            </div>
          </div>
          <div className="h-full flex-3">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-12 md:gap-12 pb-16 md:pb-0 ">
              <div className="w-full h-full rounded-lg relative shadow-sm shadow-white">
                <img
                  src={HomeIntroPic2}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-10 w-40 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg font-semibold bg-linear-to-r bg-gradient-to-r from-indigo-500 to-blue-400">
                  Đoàn kết
                </div>
              </div>
              <div className="w-full h-full rounded-lg relative shadow-sm shadow-white">
                <img
                  src={HomeIntroPic3}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-10 w-40 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg font-semibold bg-linear-to-r bg-gradient-to-r from-indigo-500 to-blue-400">
                  Xung kích
                </div>
              </div>
              <div className="w-full h-full rounded-lg relative shadow-sm shadow-white">
                <img
                  src={HomeIntroPic4}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-10 w-40 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg font-semibold bg-linear-to-r bg-gradient-to-r from-indigo-500 to-blue-400">
                  Tình nguyện
                </div>
              </div>
              <div className="w-full h-full rounded-lg relative shadow-sm shadow-white">
                <img
                  src={HomeIntroPic5}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 h-10 px-8 w-40 flex items-center justify-center bg-blue-500 text-white rounded-lg text-lg font-semibold bg-linear-to-r bg-gradient-to-r from-indigo-500 to-blue-400">
                  Sáng tạo
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="teams-section"
          className="min-h-screen md:h-screen h-fit pt-30 pb-24 flex flex-col items-center justify-center gap-8 md:gap-0 relative"
        >
          <div className="absolute top-0 h-full w-full">
            <img src={HomeContactPic1} className="h-full w-full object-cover" />
          </div>
          <div className="text-3xl lg:text-5xl relative z-20 font-extrabold bg-linear-to-r bg-gradient-to-r from-indigo-700 to-blue-500 bg-clip-text text-transparent py-3 font-bungee text-center leading-16">
            Ban chấp hành <br className="md:hidden" /> nhiệm kỳ 2025-2026
          </div>
          <div className="flex md:mt-8 flex-col md:flex-row h-full w-full gap-12 items-center justify-center px-12 md:px-16">
            {MEMBERS.map((item) => (
              <div
                className={`w-full flex h-120 relative z-0 overflow-hidden hover:scale-108 ${item?.highlight ? "scale-110" : "scale-100"} transition-all duration-[800ms] rounded-xl group`}
              >
                <div className="absolute top-0 h-full w-full blur-sm">
                  <img
                    src={item.avatar}
                    className="h-full w-full object-cover "
                  />
                </div>
                <div className="absolute top-0 h-full w-full blur-sm bg-black/50" />

                <div
                  className="relative z-10 flex flex-col text-white items-center 
  pt-12 md:py-12 md:hover:pt-24 
  gap-6 w-full group transition-all duration-[800ms]"
                >
                  <div
                    className="h-48 w-48 rounded-full 
  translate-y-0 md:translate-y-1/2 
  md:group-hover:translate-y-0 
  transition-all duration-[800ms]"
                  >
                    <img
                      src={item.avatar}
                      className={`h-full w-full object-cover rounded-[999px] shadow-cyan-100 group-hover:shadow-lg transition-all duration-[800ms] ${item?.fix}`}
                    />
                  </div>
                  <div
                    className="items-center justify-center text-center flex flex-col 
  opacity-100 md:opacity-0 
  md:group-hover:opacity-100 
  transition-all duration-[800ms] gap-2"
                  >
                    <div className="text-xl font-semibold">{item.name}</div>
                    <div className="font-semibold bg-linear-to-r bg-gradient-to-r from-indigo-400 to-blue-500 w-fit px-4 text-white rounded-lg py-2">
                      {item.position}
                    </div>
                    <div className="text-sm">{item.university}</div>
                    <div className="text-sm">{item.major}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="activities-section"
          className="min-h-screen h-fit flex flex-col items-center justify-center bg-blue-950 py-30"
        >
          <div className="flex flex-col h-full w-full">
            <div className="h-72 flex-shrink-0 overflow-hidden relative z-0">
              <div
                className="absolute top-0 left-0 flex flex-row h-full gap-8 w-max pb-1"
                ref={containerRefLeft}
              >
                {[...ACTIVITIES, ...ACTIVITIES].map((item) => (
                  <div className="h-full aspect-[4/3] flex flex-col relative z-0 group">
                    <div className="h-full w-full">
                      <img
                        src={item.img}
                        className="h-full w-full object-cover rounded-lg shadow-cyan-100 shadow-sm"
                      />
                    </div>
                    <div
                      className="absolute bottom-0 z-20 w-full 
  bg-gradient-to-t from-black/60 to-transparent 
  text-white flex items-end md:group-hover:min-h-32 md:group-hover:p-3 p-3 md:p-0 min-h-0 h-32 md:h-0 overflow-hidden transition-all duration-500 rounded-b-lg"
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-40 justify-center flex items-center">
              <div className="uppercase text-3xl md:text-4xl md:text-6xl font-bold bg-linear-to-r bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent py-8 font-bungee">
                Hành trình tuổi trẻ
              </div>
            </div>
            <div className="h-72 flex-shrink-0 overflow-hidden relative z-0">
              <div
                className="absolute top-0 left-0 flex flex-row h-full gap-8 w-max pb-1"
                ref={containerRefRight}
              >
                {[...ACTIVITIES, ...ACTIVITIES].map((item) => (
                  <div className="h-full aspect-[4/3] flex flex-col relative z-0 group">
                    <div className="h-full w-full">
                      <img
                        src={item.img}
                        className="h-full w-full object-cover rounded-lg shadow-cyan-100 shadow-sm"
                      />
                    </div>
                    <div
                      className="absolute bottom-0 z-20 w-full 
  bg-gradient-to-t from-black/60 to-transparent 
  text-white flex items-end md:group-hover:min-h-32 md:group-hover:p-3 p-3 md:p-0 min-h-0 h-32 md:h-0 overflow-hidden transition-all duration-500 rounded-b-lg"
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact-section"
          className="min-h-screen h-screen flex flex-col md:flex-row items-center justify-center border relative z-0 px-16 gap-16"
        >
          <div className="absolute top-0 -z-10 h-full w-full">
            <img src={HomeContactPic3} className="h-full w-full object-cover" />
          </div>
          <div className="absolute top-0 -z-10 h-full w-full bg-black/50 backdrop-blur-sm"></div>
          <div className="w-full overflow-hidden rounded-lg shadow-white shadow-xl">
            <img
              src={HomeContactPic2}
              className="rounded-lg shadow-lg h-full w-full scale-150"
            />
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100093262587854"
            target="blank"
            className="w-full flex flex-row gap-4 items-center border justify-center bg-white py-4 rounded-lg"
          >
            <img src={FacebookLogo} className="h-12 w-12" />
            <div>
              <span className="text-xl md:text-4xl font-bold  bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Tuổi trẻ Đông B
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="h-64 border">Footer</div> */}
    </div>
  );
};

export default Home;
