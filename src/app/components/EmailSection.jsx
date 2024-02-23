import React from "react";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm on the lookout for new chances, so feel free to drop me a line
          anytime! Whether you've got a question or just wanna say hey, I'll do
          my best to hit you back.
        </p>
        <div className="social flex flex-row gap-2"></div>
      </div>
    </section>
  );
};

export default EmailSection;
