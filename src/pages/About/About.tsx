import * as React from 'react';
import asset1 from '../../assets/img/Asset 1.png';
import asset2 from '../../assets/img/Asset 2.png';
import profileImg from '../../assets/img/caveman-profile.png';
import johnImg from '../../assets/img/john.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about__background'>
        <div className='about__body'>
          <img
            src={profileImg}
            alt='Caveman Picture'
            className='about__caveman-pic'
          />
          <h2 className='about__header'>About Crypto Cavemen Studios</h2>
          <p className='about__description'>
            Hello fellow Cave Dwellers! Welcome to the website of the Crypto
            Cavemen project. I&apos;m excited to introduce myself and speak a
            little about the future of the Crypto Cavemen project. To start, a
            little about me...My name is John and I live in beautiful Georgia in
            the US. I have been an artist since I was a child when my Dad put a
            paint brush in my hand at 4 years old. I have always loved art, both
            creating and appreciating. I like to invest in NFT projects and am
            thrilled to be a part of this revolution in digital art and
            technology. My hobbies mostly include art, programming, web
            development, Crypto (obviously, haha), and occasionally gaming. This
            space has provided an amazing outlet to bring all of my favorite
            hobbies together into a single project, Crypto Cavemen!
          </p>
          <img
            src={johnImg}
            alt='John Picture'
            className='about__profile-pic'
          />
          <p className='about__description'>
            Crypto Cavemen NFT&apos;s are the first phase of an ongoing project
            that will create great value for early holders of the NFT&apos;s.
            The legacy collection has already been minted and there are 555
            Cavemen available on deadrare and Isengard. These Cavemen will
            provide a lot of utility moving forward with the project and give
            early adopters increased value moving forward! The end game will be
            a literal metaverse game (more to come next year), but the
            infrastructure must be created first. From the sale of the
            NFT&apos;s the Studio will be able to set up a perpetual revenue
            stream for continued growth without the need for venture capital.
            This will create the stability needed to move forward with hiring
            and continue to create value for investors. This is a central theme
            of the project and part of the overall mission which is to create
            value for investors in the project and players in the future. As the
            studio grows I will be onboarding new talent to help grow the
            project and am currently in talks with a couple of other Cave
            peoples.
          </p>
          <div className='about__images'>
            <div>
              <img
                src={asset1}
                alt='Cavemens Picture'
                className='about__cavemen about__left'
              />
            </div>
            <div className='image'>
              <img
                src={asset2}
                alt='Cavemens Picture'
                className='about__cavemen about__right'
              />
            </div>
          </div>
          <p className='about__description'>
            Phase 1 of the project is to complete the NFT sales and set up the
            basic infrastructure with an interactive website (more to come),
            Caveman tracking system (for future air drops), social media (for
            community engagement), and $SHELLS distribution. There will be a bit
            of overlap between the phases, but after this is complete it is time
            to move on to phase 2, which will be a major growth phase. This will
            include bringing on talent to grow the project and creating
            consistent revenue streams for Cavemen holders. I am considering a
            few options for structuring the project, which will most likely be
            something similar to a DAO. I plan on rewarding Caveman holders with
            SHELLS, EGLD, MEX, Supplies (3D modeled NFT&apos;s for the game),
            and special Cavemen drops! I am also looking into the ability to
            &apos;stake&apos; your Cavemen for additional rewards and staking
            SHELLS as well. Also, you can&apos;t have Cavemen without Cavewomen!
            More about this will be coming soon! This project is just getting
            started and I am very happy that you are a part of it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
