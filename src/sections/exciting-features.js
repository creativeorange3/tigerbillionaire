/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import feature from 'assets/images/gentleman.png';
import emoji from 'assets/images/icons/emoji-2.png';

const data = [
  {
    title: 'Staeg 1',
    contents: (
      <div>
        Spooderman Lunch <br />
        Bilding Comnunity  <br />
        Kall channelz (not Lemon)  <br />
        4chan posts und ads <br />
        Reditt potst <br />
        Shitling und meme consents
      </div>
    ),
  },
  {
    title: 'Staeg 2',
    contents: (
      <div>
        Coinhanter and simliar sites linstings
        <br />
        Tiktak ads und shitling
        <br />
        Hard makreting push <br />
      </div>
    ),
  },
  {
    title: `Phase 3`,
    contents: (
      <div>
        Cemce und Cege Listings
        <br />
        Spešial NFTZ     <br />
        Boksing fight wid Dolan <br />
        ETH brigde<br />
      </div>
    ),
  },
];

const ExcitingFeatures = () => {
  return (
    <Box as="section" id="roadmap" variant="section.excitingFeatures">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.illustration}>
            <Image src={feature} alt="feature" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Briging teh good ol meme to lief"
              description="Dont miss dis x69420 gem!"
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    fontWeight: 'bold',
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
    paddingBottom: [0, 0, 0, 0, '50px']
  },
  illustration: {
    fontWeight: 'bold',
    display: ['none', 'none', 'block'],
    img: {
      maxWidth: '500px'
    }
  },
  heading: {
    fontWeight: 'bold',
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    fontWeight: 'bold',
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
