import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const Seo = ({ title }) => {
  return (
    <Helmet>
      <title className="capitalize">{title}</title>
      <meta
        name="description"
        content="Explore and book the finest hotels and apartments for your next getaway with ease and confidence."
      />
    </Helmet>
  );
};

export default Seo;