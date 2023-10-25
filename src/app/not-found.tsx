import Image from "next/image";
import Link from "next/link";
import notFoundImage from "../assets/404-Error-amico.png";

const NotFoundPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="landing-page">
          <div className="">
            <Image src={notFoundImage} width={200} alt="Not found..." />
          </div>
          <h1> 404 Error.</h1>
          <p> We can't find the page you're looking for.</p>

          <Link className="button" href={"/profile"}>
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
