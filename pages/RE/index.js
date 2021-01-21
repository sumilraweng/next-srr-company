import Banner from "../../components/banner";

import Footer from "../../components/footer";
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
        bannerImage={users.content.image}
        color="white"
      />
      <Footer link={users.footerLinks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  let response = await fetch(
    "https://mistycal98.github.io/static-json-files/raweng.json"
  );
  let data = await response.json();
  return {
    props: {
      users: [...data],
    },
  };
};

export default RE;
