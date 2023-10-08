import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          This is a React Application to leave feedback for a product or a
          service
        </p>
        <p>Version: 1.0.0</p>

        <p>
          {/* <a href="/">Back to Home</a> */}
          <Link to='/'>Back to Home</Link>
          {/* Her route işleminde sayfaların yenilenmemesi için <a href=""> tag'i yerine <Link to=""> tag'i kullandık. */}
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
