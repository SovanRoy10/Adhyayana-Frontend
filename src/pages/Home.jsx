import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Placement from '../components/Placement';
import Courses from '../components/Courses';
import Students from '../components/Students';
import Teachers from '../components/Teachers';
import UniquePoints from '../components/UniquePoints';
import Feedback from '../components/Feedback';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Placement />
      <Courses />
      <Students />
      <Teachers />
      <UniquePoints />
      <Feedback />
    </>
  );
}

export default Home;
