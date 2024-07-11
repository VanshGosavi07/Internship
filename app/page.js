import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/form">
        Go to Form
      </Link>
    </div>
  );
}
