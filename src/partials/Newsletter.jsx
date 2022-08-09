import React from "react";

import Oneinch from "../images/1inch.png";

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-32">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div
            className="relative bg-slate-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            {/* Background illustration */}
            <div
              className="absolute right-14 bottom-5 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <img
                className="md:max-w-none mx-auto rounded"
                src={Oneinch}
                width="200"
                height="200"
                alt="Features bg"
              />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Sponsored by 1inch</h3>
                <p className="text-gray-300 text-lg mb-6">
                  DeltaDex is a 1inch hackathon winner and grant recipient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
