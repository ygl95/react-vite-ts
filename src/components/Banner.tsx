import data from "../data/BannerData.json";

const Banner = () => {
  return (
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{data.banner.title}</h1>
        <p className="lead my-3">{data.banner["sub-title"]}</p>
        <p className="lead mb-0">
          <a
            href={data.banner.linkurl.link}
            className="text-white font-weight-bold"
          >
            {data.banner.linkurl.linktext}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
