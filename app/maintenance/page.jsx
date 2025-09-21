import DownloadResume from '@/components/Download';

import Header from "@/components/Maintenance/Header";
import Footer from "@/components/Maintenance/Footer";

export default function MaintenancePage() {
  return (
    <div className='text-center min-h-screen flex flex-col p-[50px]'>
      <Header />
      <h1>The site is currently undergoing maintenance.</h1>
      <p>We will be back shortly. Please check again soon.</p>
      <br /> <br />
      <p>In the meantime, you can download a recent resume by clicking the button below</p>
      <br />
      <DownloadResume />
      <Footer />
    </div>
  );
}