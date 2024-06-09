import { useEffect, useState } from "react";
import NavBar from "../components/Fragments/Navbar";
import Footer from "../components/Fragments/Footer";
import SectionHead from "../components/Elements/SectionHead";
import TeamCard from "../components/Fragments/TeamCard";
import { teamLists } from "../data/teams.js";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { portfolioData } from "../data/portfolio";
import { Link } from "react-router-dom";
import Carousel from "../components/Fragments/Carousel.jsx";

AOS.init();

const Beranda = () => {
  const services = [
    {
      title: "Aplikasi Web",
      images: "./images/layanan-website.png",
      value: "pembuatan dan pengelolaan aplikasi website",
      // classname: "ps-5",
    },
    {
      title: "Artikel",
      images: "./images/layanan-artikel.png",
      value: "artikel yang informatif dan berkualitas",
      // classname: "ps-20",
    },
    {
      title: "Konten Digital",
      images: "/images/layanan-sosmed.png",
      value: "konten sosial media yang  berkualitas",
      // classname: "ps-5",
    },
  ];

  const customers = [
    {
      id: 1,
      image: "./images/himatif-logo.png",
    },
  ];

  const reviews = [
    {
      id: 1,
      image: "./images/testimoni/testimoni-1.jpg",
      name: "Rio Rivaldo Sinuhaji",
      content:
        "Salah satu hal yang saya dapatkan setelah Mini Course ini adalah menambah pengetahuan tentang desain UI/UX yang sebelumnya saya tidak tahu. Semoga Step Up terus membagi ilmu seperti ini",
    },
    {
      id: 2,
      image: "./images/testimoni/testimoni-2.png",
      name: "Bayu Prasetya Wijaya",
      content:
        "Adanya Mini Course : UI/UX For Beginner membuat saya bisa tahu dan belajar skill baru dalam desain aplikasi. Harapan saya, semoga Step Up melanjutkan untuk terus berbagi ilmu",
    },
    {
      id: 3,
      image: "./images/dummy-profile.png",
      name: "Alfat Rahman",
      content:
        "Kegiatan Mini Course ini sangat seru. Berbagi ilmunya tetaplah dilanjutkan",
    },
    {
      id: 4,
      image: "./images/dummy-profile.png",
      name: "Annas Sovianto",
      content:
        "Pengalaman saya setelah mengikuti Mini Course : UI/UX For Beginner ini adalah menambah wawasan, upgrade skill, upgrade relasi serta menumbuhkan potensi. Semoga berbagi ilmunya tidak pernah berhenti",
    },
    {
      id: 5,
      image: "./images/dummy-profile.png",
      name: "Dea Reigina",
      content:
        "Mini Course ini membuat saya jadi tahu tools Figma yang sebelumnya saya belum tahu",
    },
  ];

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // console.log(teamLists);
    setTeams(teamLists);
  }, [teams]);

  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    setPortfolios(portfolioData);
  }, [portfolios]);

  return (
    <div className="flex flex-col min-h-screen mt-24">
      <NavBar />
      <section className="h-auto md">
        <div className="md:flex md:flex-row md:ps-32 md:h-screen">
          <div
            className="flex flex-col ps-2 md:pt-32 w-full"
            // data-aos="fade-up"
            // data-aos-duration="4000"
          >
            <SectionHead classname="md:text-start md:text-3xl">
              Step Up Project
            </SectionHead>
            <h3 className="w-full text-2xl font-bold mt-5 md:text-[64px] md:mb-6">
              Step Up <span className="text-primary">Code Up.</span>
            </h3>
            <p className="mt-6 pe-11 md:w-10/12">
              Step Up Project hadir sebagai digitalisasi bisnis, pengembangan
              dan pengelolaan aplikasi web, dan juga sebagai edukasi seputar
              dunia IT
            </p>
            <button className="w-[148px] h-[40px] text-sm font-normal mt-10 text-white bg-primary rounded-full transition hover:shadow-lg hover:shadow-primary/50 hover:bg-gradient-to-l from-primary to-[#2B3087] duration-300">
              <Link to="/konsultasi" className=" text-xs text-start">
                Konsultasi Sekarang
              </Link>
            </button>
          </div>
          <div className="w-full md:w-[90%] h-auto me-20 mb-[53px] bg-[url('./images/vector-2.png')] md:bg-[url('./images/vector-2-lg.png')] bg-contain md:scale-90 bg-no-repeat mt-10 md:mt-28 relative">
            <img
              src="./images/mockup-5.png"
              className="w-full h-auto m-auto md:scale-75 md:-mt-16"
              alt=""
              // data-aos="fade-left"
              // data-aos-duration="1000"
            />
            <img
              src="./images/frame-footer-2.png"
              className="m-auto -top-36 right-28 scale-125 transition ease-in-out hidden md:block absolute"
              alt=""
              // data-aos="fade-left"
              // data-aos-duration="1000"
            />
          </div>
        </div>
      </section>
      <section className="h-auto">
        <div
          className="w-full ps-4 md:px-4 bg-[#f8f8f8] py-8"
          // data-aos="fade-up"
          // data-aos-duration="3000"
        >
          <SectionHead>Layanan Kami</SectionHead>
          <div className="flex flex-col md:flex-row md:gap-14 md:ps-32 md:w-11/12 md:items-center md:justify-center items-center mt-7">
            {services.map((service) => (
              <CardLayanan key={service.title} {...service}></CardLayanan>
            ))}
          </div>
        </div>
      </section>
      <section className="h-auto pb-16 md:pb-24">
        <div className="w-full px-6 py-8">
          <SectionHead>Portfolio</SectionHead>
          <div className="mt-7 flex flex-col md:flex-row md:justify-center flex-wrap gap-[70px] md:gap-36 md:mt-16 items-center">
            {portfolios.map((item) => (
              <Portfolio key={item.id} {...item}></Portfolio>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full ps-4 pt-8 bg-slate-100">
        <SectionHead>Partner</SectionHead>
        <div className="mt-8">
          <Carousel
            data={customers}
            srcLeftButtonPath={`../../svg/left-arrow.svg`}
            srcRightButtonPath={`../../svg/right-arrow.svg`}
            chooseFragment="partner"
          />
        </div>
      </section>

      <section className="w-full my-10 bg-white">
        <SectionHead>Testimoni</SectionHead>
        <div className="mt-8">
          <Carousel
            data={reviews}
            srcLeftButtonPath={`../../svg/left-arrow.svg`}
            srcRightButtonPath={`../../svg/right-arrow.svg`}
            chooseFragment="review"
          />
        </div>
      </section>

      <section className="h-auto">
        <div className="w-full pt-14 pb-12 bg-white ">
          <SectionHead>Tim Kami</SectionHead>
          <div
            className="grid grid-cols-2 justify-items-center mx-auto gap-6 gap-y-8 mt-4 md:grid-cols-3 md:mx-auto md:gap-8 md:gap-y-12 md:px-20
          lg:gap-20"
          >
            {teams.map((item) => (
              <TeamCard key={item.id} {...item}></TeamCard>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

const CardLayanan = (props) => {
  const { title, images, classname, value } = props;

  CardLayanan.propTypes = {
    title: PropTypes.string,
    images: PropTypes.string,
    classname: PropTypes.string,
  };

  return (
    <div className={`flex justify-center items-center w-[75%]`}>
      <div className="flex flex-col pe-5 h-[216px] w-full ps-9 pt-8 rounded-2xl mb-8 border-b-4 border-primary shadow-lg shadow-slate-400 hover:shadow-xl hover:shadow-primary/75 transition-all duration-700">
        <img src={images} alt={title} className="w-[45px] h-[45px] mb-3" />
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <p className="text-sm">{value}</p>
      </div>
    </div>
  );
};

const Portfolio = (props) => {
  const { subtitle, title, imageCard } = props;
  return (
    <div className="flex flex-col px-5 pt-4 relative shadow-lg shadow-slate-400 h-[216px] md:scale-110 rounded-lg">
      <h2 className="text-sm font-semibold">{subtitle}</h2>
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="relative bottom-0 px-5 w-[267px] h-[182px]">
        <img
          src={imageCard}
          alt="mockup"
          className="w-full absolute -right-0.5 top-4"
        />
      </div>
    </div>
  );
};
const OurCustomer = (props) => {
  const { image } = props;
  return (
    <div className="flex h-[100px] w-min-[100px] items-center justify-center">
      <img src={image} alt="" className="" />
    </div>
  );
};

export default Beranda;
