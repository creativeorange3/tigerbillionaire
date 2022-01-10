/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import banner from 'assets/images/logo.png';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Image src={banner} alt="Spooderman" style={{width: '50px'}} />

    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'flex-start',
    cursor: 'pointer',
    display: 'flex',
    width: 'auto',
    flexDirection: 'column'
  },
  image: {
    height: 'auto',
    width: [100, null, 100],
  },
};
