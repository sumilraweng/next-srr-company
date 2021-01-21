import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import Footer from "../components/footer";

import axios from "axios";

function Home(props) {
  const users = props.users[0];
  const logo = {
    src: users.logo,
    width: 100,
  };
  // return (
  //   <div>
  //     {" "}
  //     <Navigation logo={logo} />{" "}
  //     <Banner
  //       bannerHead={users.content.heading}
  //       bannerPara={users.content.subHeading}
  //     />
  //   <Footer link={users.footerLinks} />
  // </div>
  // );

  return (
    <div>
      {" "}
      <Navigation logo={logo} />
      <Banner
        bannerHead={users.content.heading}
        bannerPara={users.content.subHeading}
      ></Banner>
      <Footer link={users.footerLinks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios.get(
    "https://mistycal98.github.io/static-json-files/surfboard.json"
  );
  return {
    props: {
      users: [...data],
    },
  };
};

export default Home;
