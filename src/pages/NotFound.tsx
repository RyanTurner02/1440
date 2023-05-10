import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="m-8 text-center">
      <h1 className="font-semibold text-6xl">404 Not Found</h1>
      <p className="mt-4"><Link to="/" className="underline">Take me back to the Timer!</Link></p>
    </div>
  );
}
 
export default NotFound;
