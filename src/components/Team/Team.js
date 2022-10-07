import React from "react";
import "./Team.css";

const professors = [
  {
    name: "Asst. Prof. Gridsada Phanomchoeng, D.Eng",
    image: "./images/team/prof/gridsada.jpg",
  },
  {
    name: "Asst. Prof. Widhyakorn Asdornwised, D.Eng",
    image: "./images/team/prof/widhyakorn.jpg",
  },
  {
    name: "Assoc. Prof. Ratchatin Chancharoen, D.Eng",
    image: "./images/team/prof/ratchatin.jpg",
  },
  {
    name: "Assoc. Prof. Lunchakorn Wuttisittikulkij, Ph.D",
    image: "./images/team/prof/lunchakorn.jpg",
  },
];

const postDocs = [
  {
    name: "Dr. Amir Parnianifard",
    image: "./images/team/postdoc/amir.jpg",
  },
  {
    name: "Dr. Sushank Chaudhary",
    image: "./images/team/postdoc/sushank.jpg",
  },
  {
    name: "Dr. Shashi  Shah",
    image: "./images/team/postdoc/shashi.jpg",
  },
  {
    name: "Dr. Rizwan",
    image: "./images/team/postdoc/rizwan.jpg",
  },
  // {
  //   name: "Dr. Rizwan",
  //   image: "./images/team/placeholder.jfif",
  // },
];

const phDs = [
  {
    name: "Pruk Sasithong",
    image: "./images/team/phd/pruk.jpg",
  },
  {
    name: "Sunita Khichar",
    image: "./images/team/phd/sunita.jpg",
  },
  {
    name: "Nang Htet Htet Aung",
    image: "./images/team/phd/nang.jpg",
  },
  {
    name: "Khawaja Zain",
    image: "./images/team/phd/zain.jpg",
  },
];

const masters = [
  {
    name: "Suebphong Noisri",
    image: "./images/team/master/bryan.jpg",
  },
  {
    name: "Siwanart Jearavongtakul",
    image: "./images/team/master/noneh.jpg",
  },
  {
    name: "Wai Phyo",
    image: "./images/team/master/wai.jpg",
  },
  {
    name: "Avishi Waidyaratne",
    image: "./images/team/master/avishi.png",
  },
  {
    name: "Imran Saeed Mirza",
    image: "./images/team/master/imran.jpg",
  },
  {
    name: "Aisha Munir",
    image: "./images/team/master/aisha.jpg",
  },
  {
    name: "Panithan La-aiddee",
    image: "./images/team/master/shuff.jpg",
  },
  {
    name: "Hongyok",
    image: "./images/team/master/yok.jpg",
  },
  {
    name: "Tayakorn",
    image: "./images/team/master/tayakorn.jpg",
  },
  {
    name: "Ye Moe Myint",
    image: "./images/team/master/ye.jpg",
  },
  {
    name: "โอ็ต",
    image: "./images/team/placeholder.jpg",
  },
];

const bachelors = [
  {
    name: "Pongsathorn Boonturm",
    image: "/images/team/bachelor/pongsathorn.jpg",
  },
  {
    name: "Panitnun Mongkolphinyopas",
    image: "/images/team/bachelor/panitnun.jpg",
  },
  {
    name: "Chawanwit Parinyawiwatkul",
    image: "/images/team/bachelor/chawanwit.jpg",
  },
  {
    name: "Kanin pinsakol",
    image: "/images/team/bachelor/kanin.png",
  },
  {
    name: "Sahasavat Kititti",
    image: "/images/team/bachelor/sahasavat.jpg",
  },
  {
    name: "Thanida Prasertchai",
    image: "/images/team/bachelor/thanida.jpg",
  },
  {
    name: "Sawit Rungjaroenkiti",
    image: "/images/team/bachelor/sawit.jpg",
  },
  {
    name: "Thantorn Thammachai",
    image: "/images/team/bachelor/thantorn.jpg",
  },
  {
    name: "Ekaroot Ruengworadakul",
    image: "/images/team/bachelor/ekaroot.jpg",
  }
];

const Team = () => {
  return (
    <section id="teammember">
      <hr />
      <h2>Our Team members</h2>
      <p className="teammember-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="teammember-container">
        <div className="teammember-professor-container">
          <h3 className="teammember-description">Professors</h3>
          <div className="teammember-professor">
            {professors.map((prof) => (
              <div className="professor" key={Math.random()}>
                <div className="professor-img-container">
                  <img
                    src={prof.image}
                    alt={prof.name}
                    className="professor-img"
                    loading="lazy"
                  />
                </div>
                <h4>{prof.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="teammember-postdoc-container">
          <h3 className="teammember-description">Postdoctoral Fellows</h3>
          <div className="teammember-postdoc">
            {postDocs.map((postDoc) => (
              <div className="professor" key={Math.random()}>
                <div className="professor-img-container">
                  <img
                    src={postDoc.image}
                    alt={postDoc.name}
                    className="professor-img"
                    loading="lazy"
                  />
                </div>
                <h4>{postDoc.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="teammember-phd-container">
          <h3 className="teammember-description">PhD Students</h3>
          <div className="teammember-phd">
            {phDs.map((phD) => (
              <div className="professor" key={Math.random()}>
                <div className="phd-img-container">
                  <img src={phD.image} alt={phD.name} className="phd-img" loading="lazy"/>
                </div>

                <h4>{phD.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="teammember-master-container">
          <h3 className="teammember-description">Master Students</h3>
          <div className="teammember-master">
            {masters.map((master) => (
              <div className="master" key={Math.random()}>
                <div className="master-img-container">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="master-img"
                    loading="lazy"
                  />
                </div>
                <h4>{master.name}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="teammember-bachelor-container">
          <h3 className="teammember-description">Bachelor Students</h3>
          <div className="teammember-bachelor">
            {bachelors.map((bachelor) => (
              <div className="professor" key={Math.random()}>
                <div className="bachelor-img-container">
                  <img
                    src={bachelor.image}
                    alt={bachelor.name}
                    className="bachelor-img"
                    loading="lazy"
                  />
                </div>

                <h4>{bachelor.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
