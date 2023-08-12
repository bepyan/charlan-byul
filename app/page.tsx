import InstaGallery from '~/components/insta-gallery';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className='container'>
      <section className='relative h-[80vh]'>
        <div className='absolute top-0 inset-x-0 -z-10 h-[80vh]'>
          <div className='relative w-full h-full overflow-hidden'>
            <video
              className='w-full inset-0 object-contain'
              src='/assets/wedding.mp4'
              muted
              preload='metadata'
              loop
              autoPlay
              webkit-playsinline='webkit-playsinline'
              playsInline
            />
            <div className='absolute -inset-px bg-white/5' aria-hidden='true' />
            <div
              className='absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-white'
              aria-hidden='true'
            />
            <div
              className='absolute -inset-px bg-gradient-to-b from-transparent via-white/10 to-white'
              aria-hidden='true'
            />
          </div>
        </div>
        <div className='absolute bottom-20 right-8 text-right'>
          <h2 className='font-bold text-2xl'>STORIES</h2>
          <span>that make you feel</span>
        </div>
      </section>
      <section className='bg-white px-4 space-y-4'>
        <h2 className='hidden'></h2>
        {[0, 0, 0].map((_, i) => (
          <div key={i} className=''>
            <img
              className='w-full h-full object-cover aspect-video'
              src={`https://picsum.photos/seed/a${i}/600/400?grayscale`}
              alt=''
            />
          </div>
        ))}
      </section>
      <section className='py-16'>
        <p className='px-7 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint eaque soluta quasi
          voluptas nisi rem tempore quibusdam quo molestias, incidunt excepturi itaque,
          exercitationem sapiente ad minima. Labore, quibusdam molestias.
        </p>
      </section>
      <section>
        <h2 className='hidden'>인스타 갤러리</h2>
        <InstaGallery
          images={[...Array(27)].map((_, i) => ({
            src: `https://picsum.photos/seed/b${i}/600/400?grayscale`,
          }))}
        />
      </section>
      <footer className='relative py-12'>
        <p className='px-6 mt-8 text-sm text-gray-600'>© 2023 bepyan. All rights reserved. </p>
      </footer>
    </main>
  );
}
