import Banner from "../../components/banner";
import Navigation from "../../components/Navigation";
import Footer from "../../components/footer";

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
        bannerImage={users.content.image}
        color="white"
      />
      <Footer link={users.footerLinks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const response = await fetch(
    "https://mistycal98.github.io/static-json-files/contentstack.json"
  );
  const data = await response.json();
  return {
    props: {
      users: [...data],
    },
  };
};

export default CS;
