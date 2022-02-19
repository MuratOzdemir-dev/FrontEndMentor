import Header from "./Header";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className="overflow-hidden rounded-bl-[5rem] bg-gradient-to-tr from-gradient-introTo to-gradient-introFrom ">
      <div className="relative bg-introMobile pb-24 [background-size:250%_220%] [background-position:-250px_-250px]">
        <Header />
        <div className="content relative my-16 space-y-8">
          {/* Text Content */}
          <div className="space-y-4 py-8 text-center text-white">
            <h1 className="text-4xl ">A modern publishing platform</h1>
            <p className="text-lg">
              Grow your audience and build your online brand
            </p>
          </div>
          {/* Buttons */}
          <div className="flex justify-center gap-2  font-ubuntu">
            <Button
              textColor="text-primary-veryLightRed"
              bg="bg-white"
              hover="hover:text-white hover:bg-primary-veryLightRed"
            >
              Start for Free
            </Button>
            <Button
              border="border-2 border-white"
              hover="hover:bg-white hover:text-white hover:text-primary-veryLightRed"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
