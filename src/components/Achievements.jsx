import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { LiaCertificateSolid } from 'react-icons/lia';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    { label: 'Happy Clients', value: 300 },
    { label: 'Properties Across Cities', value: 5 },
    { label: 'Successful Projects', value: 80 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const top = aboutSection.getBoundingClientRect().top;
        const visible = top < window.innerHeight - 150;
        setIsVisible(visible);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="mx-auto max-w-[1440px]">
      {/* CONTAINER */}
      <div className="flex flex-col xl:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-[6] flex flex-col justify-center bg-[#008274] text-white px-6 lg:px-12 py-16">
          <h2 className="h2 text-white">Our Achievements</h2>
          <p className="py-5 text-white/90 max-w-[47rem] leading-relaxed">
            Over the years, <strong>SPEELIX IDEAL HOME (NIG) LTD</strong> has grown into a trusted name in Nigeria’s real estate
            landscape. From luxury apartments in Lekki to family homes in Ikeja, we’ve successfully helped hundreds of clients
            find, rent, and invest in their dream properties—backed by integrity, transparency, and results.
          </p>

          {/* STATISTICS CONTAINER */}
          <div className="flex flex-wrap gap-8 mt-4">
            {statistics.map((statistic, index) => (
              <div key={index} className="p-2">
                <div className="flex items-end gap-1">
                  <CountUp
                    start={isVisible ? 0 : null}
                    end={statistic.value}
                    duration={3}
                    delay={0.5}
                    enableScrollSpy={true}
                  >
                    {({ countUpRef }) => (
                      <h3 ref={countUpRef} className="text-5xl font-semibold tracking-tight"></h3>
                    )}
                  </CountUp>
                  <span className="text-4xl font-light text-white">+</span>
                </div>
                <p className="text-lg capitalize pt-2">{statistic.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-[2] relative bg-white text-[#008274] px-6 lg:px-12 py-16 flex justify-center items-center">
          <div className="p-4 rounded-lg flex flex-col items-center text-center">
            <span className="p-3 flex items-center justify-center rounded-full bg-[#008274]/10 mb-4">
              <LiaCertificateSolid className="text-6xl text-[#008274]" />
            </span>
            <p className="text-base leading-relaxed">
              Certified and registered under Nigerian corporate laws, <strong>SPEELIX IDEAL HOME (NIG) LTD</strong> operates with full
              compliance—ensuring your property transactions are secure, verified, and professionally managed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
