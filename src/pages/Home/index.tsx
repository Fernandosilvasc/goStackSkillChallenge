import React from 'react';

import {
  Wrapper,
  SectionOne,
  Blur,
  BoxIntro,
  BoxContent,
  SectionTwo,
  BoxContentTwo,
  BoxContentThree,
  ParallelogramBG,
  FilmDescriptionContainer,
  Footer,
} from './styles';

import { ReactComponent as BlurImg } from '../../assets/blur.svg';
import { ReactComponent as ImgFilm } from '../../assets/imgFilm.svg';
import ImgFCS from '../../assets/fcs.png';
import BobMarley from '../../assets/bob_marley.jpg';
import ThomasEd from '../../assets/ThomasEd.png';

const Home: React.FC = () => {
  return (
    <>
      <Wrapper>
        <SectionOne>
          <Blur>
            <img src={ImgFCS} alt="FCS" />
            <BlurImg />
          </Blur>
          <BoxIntro>
            <h1>A trip without destination, but without return. </h1>
            <h2>... by Fernando Corrêa da Silva</h2>
            <p>Hello Dev`s,</p>
            <p>All right with you?</p>
            <p>
              Maybe some of you woke up on a beautiful day and asked yourself
              &quot; Why can&apos;t I be happy, even though I have everything
              around me? &quot;
            </p>
            <p>
              I have come across this thought countless times, but I have not
              been able to interpret why it exists in a life to which it has
              always been graced and blessed by God.
            </p>
            <p>
              However, over the years, I realized that this was correlated to my
              purpose in life. So I started to ask myself, &quot;What makes me
              wake up every day and want to evolve as a human being? &quot;,
              Maybe the answer is too complex to report, more quickly I realized
              that if I wanted to change this scenario, only I could do
              something for myself.
            </p>
          </BoxIntro>
          <BoxContent>
            <h1>Are you really willing to change?</h1>
            <p>
              That is one of the questions I have always asked myself and I can
              say that I have not always answered YES.
            </p>
            <p>
              As easy as it is sometimes to answer with YES, we are not prepared
              for such a change, and I venture to say that we never will be.
            </p>
            <p>
              But what differs from whether or not we reach that destination
              will be our &quot;RESILIENCE&quot;. Maybe you will ask me ”Is this
              only necessary? and I would say no, I would say that the other
              skills will complement you, however, the &quot;RESILIENCE&quot;
              will keep you up.
            </p>
            <div>
              <img src={BobMarley} alt="BobMarley" />
              <div>
                <p>
                  &ldquo; You don&apos;t know how strong you are until being
                  strong is the only option you have left. &rdquo;
                </p>
                <span>-Bob Marley</span>
              </div>
            </div>
          </BoxContent>
        </SectionOne>

        <SectionTwo>
          <ParallelogramBG />
          <FilmDescriptionContainer>
            <div>
              <h1>the PURSUIT of HAPPYNESS</h1>
              <p>
                I believe that many of you had the opportunity to watch this
                movie, but if not, I recommend that you take the time and watch
                it.
              </p>
              <p>
                The film is based on the true story of Chris Gardner, who
                founded his own company and today is also dedicated to telling
                his inspiring life story.
              </p>
              <p>
                Chris achieved his goal by having &quot;RESILIENCE&quot; in his
                difficult moments in life, and by countless times that he stood
                up for every &quot;No&quot; that life provided him.
              </p>
              <a
                href="https://www.netflix.com/title/70044605"
                target="_blank"
                rel="noreferrer"
              >
                WATCH NOW -&gt;
              </a>
            </div>

            <ImgFilm />
          </FilmDescriptionContainer>

          <BoxContentTwo>
            <h1>
              So &quot;Resilience&quot; is a skill that we should develop?
            </h1>
            <p>
              I was asked to answer what would be the best soft skill that a
              developer should have today and why it should be the most
              important among the others. I believe that you already know my
              answer, &quot;RESILIENCE&quot;.
            </p>
            <p>
              But so that it is not only my opinion here, let me show you the
              meaning of that simple word.
            </p>
            <p>
              &ldquo; Resilience in the scientific world is the ability of a
              body to return to its original shape after suffering a deformation
              or shock. &rdquo;
            </p>
            <p>
              Now if we look for a psychological concept of resilience, then we
              will find the following definition:
            </p>
            <p>
              &ldquo; Resilience is a psychological aspect, defined as the
              ability of an individual to deal with problems, overcome obstacles
              or withstand the pressure of adverse situations - shock stress
              etc.- without going into a psychological outbreak. &rdquo;
            </p>
          </BoxContentTwo>
          <BoxContentThree>
            <img src={ThomasEd} alt="ThomasEdison" />
            <div>
              <p>
                We can see how strong this ability is just by reading these two
                concepts. But perhaps you would agree with my opinion if I
                showed you something more concrete or tangible.
              </p>
              <p>
                So I invite you to come back in 1879, to remember a fact that
                changed the world.
              </p>
              <p>
                &ldquo; At that time, at the age of 32, Thomas Edison and his
                team had just completed the invention of the light bulb, only
                after failing 1200 times to achieve success. &rdquo;
              </p>
              <p>
                I believe that now we have no doubt how important it is to
                develop this skill in us, because there is no point in having
                the other skills if you and I do not know how to raise our heads
                and move on every time we fail in this life.
              </p>
            </div>
          </BoxContentThree>
        </SectionTwo>
        <Footer>
          <span> Copyright © 2020 Fernando Corrêa da Silva </span>
        </Footer>
      </Wrapper>
    </>
  );
};

export default Home;
