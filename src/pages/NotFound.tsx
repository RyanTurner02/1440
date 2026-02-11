import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="mt-16 text-center sm:mt-44">
      <h1 className="font-semibold text-8xl">404 Not Found</h1>
      <p className="mt-2 text-3xl">The requested page does not exist</p>
      <p className="text-3xl underline"><Link to="/">Back to the timer</Link></p>
    </div>
  );
}
 
export default NotFound;
