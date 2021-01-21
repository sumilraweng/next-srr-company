import Banner from "./banner";
import Navigation from "../../components/Navigation";
import axios from "axios";
import Footer from "./footer";

function CS(props) {
  const users = props.users[0];
  const logo = {
    src: users.logoBlack,
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
    "https://mistycal98.github.io/static-json-files/contentstack.json"
  );
  return {
    props: {
      users: [...data],
    },
  };
};

export default CS;
