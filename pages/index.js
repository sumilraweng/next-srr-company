import Navigation from "../components/Navigation";
import Banner from "../components/banner";
import Footer from "../components/footer";

function Home(props) {
  const users = props.users[0];
  const logo = {
    src: users.logo,
    width: 100,
  };

  return (
    <div>
      {" "}
      <Navigation logo={logo} />
      <Banner
        bannerHead={users.content.heading}
        bannerPara={users.content.subHeading}
        bannerImage={users.content.image}
        color="black"
      ></Banner>
      <Footer link={users.footerLinks} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const response = await fetch(
    "https://mistycal98.github.io/static-json-files/surfboard.json"
  );
  const data = await response.json();

  return {
    props: {
      users: [...data],
    },
  };
};

export default Home;
