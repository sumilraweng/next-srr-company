import Banner from "./banner";
import axios from "axios";
import Footer from "./footer";
import Navigation from "../../components/Navigation";

function RE(props) {
  const users = props.users[0];
  const logo = {
    src: users.logoBlack,
    width: 100,
  };
  return (
    <div>
      <Navigation logo={logo} />
      <Banner
        bannerHead={users.content.heading}
        bannerPara={users.content.subHeading}
      />
      <Footer link={users.footerLinks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios.get(
    "https://mistycal98.github.io/static-json-files/raweng.json"
  );
  return {
    props: {
      users: [...data],
    },
  };
};

export default RE;
