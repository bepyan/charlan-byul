import Accordion from '~/components/accordion';
import ContactDialog from '~/components/contact-dialog';
import CopyButton from '~/components/copy-button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '~/components/dialog';
import { DividerIcon, PearlIcon } from '~/components/icons';
import InstaGallery from '~/components/insta-gallery';

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main className='container'>
      {/* 동영상 */}
      <section className='relative w-full aspect-4/5'>
        <div className='absolute top-0 inset-x-0 -z-10'>
          <div className='relative overflow-hidden'>
            <video
              className='w-full inset-0 object-cover aspect-4/5'
              src='https://velog.velcdn.com/images/bepyan/post/4b5eac52-8d8f-465f-8087-564517fa4f35/image.mp4'
              preload='metadata'
              loop
              autoPlay
              webkit-playsinline='webkit-playsinline'
              playsInline
            />
          </div>
        </div>
      </section>
      {/* */}
      <section className='bg-white mt-16'>
        <h2 className='font-serif_en text-center text-xl'>wedding invitation</h2>
        <div className='flex justify-center my-4'>
          <PearlIcon />
        </div>
        <div className='text-center'>
          <div className='flex justify-center items-center gap-1'>
            <span>김경찬</span>
            <DividerIcon />
            <span>김샛별</span>
          </div>
          <div className='mt-4 text-sm text-gy-6 leading-7'>
            2023년 11월 4일 토요일 낮 12:30
            <br />
            라비돌웨딩강남 2F 오뗄홀
          </div>
        </div>
        <div className='mt-8'>
          <img
            className='w-full h-full aspect-4/3'
            src='https://github.com/bepyan/charlan-byul/assets/65283190/bc216e75-9b2f-42e5-90aa-af2473195c24'
            alt=''
          />
        </div>
      </section>
      {/* */}
      <section className='text-sm'>
        <p className='pt-16 px-3 text-center leading-7'>
          하나님의 섬세하신 계획 아래 
          <br />
          사랑과 순종함으로 만나 
          <br />
          이제 연합하여 새로운 가정을 이루려 합니다. 
          <br />
          서로를 사랑함으로 하나님을 기쁘시게 하고 
          <br />
          이웃을 섬기는 선한 가정을 이룰 수 있게 
          <br />
          오셔서 축복해 주시면 감사하겠습니다.
        </p>
        <div className='mt-10 space-y-6'>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <div>김인환</div>
              <div>김옥현</div>
            </div>
            <span>의</span>
            <span>차남</span>
            <strong>경찬</strong>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <div>
              <div>김경복</div>
              <div>김유정</div>
            </div>
            <span>의</span>
            <span>장녀</span>
            <strong>샛별</strong>
          </div>
        </div>
        <div className='mt-12 text-center'>
          <ContactDialog
            groomList={[
              { designation: '신랑', name: '김경찬', phone: '010' },
              { designation: '신랑 아버지', name: '김인환', phone: '010' },
              { designation: '신랑 어머니', name: '김옥현', phone: '010' },
            ]}
            priestList={[
              { designation: '신부', name: '김샛별', phone: '010-8411-8385' },
              { designation: '신부 아버지', name: '김경복', phone: '010-5112-5683' },
              { designation: '신부 어머니', name: '김유정', phone: '010-2995-5683' },
            ]}
          />
        </div>
      </section>
      {/* 달력 */}
      <section className='mt-16 mb-24'>
        <div className='relative'>
          <img
            className='w-full h-full aspect-4/5'
            src='https://github.com/bepyan/charlan-byul/assets/65283190/ceab1daf-4f02-4d4e-b0ee-0275e5fb9650'
            alt=''
          />
        </div>
      </section>
      {/* 갤러리 */}
      <section>
        <h2 className='hidden'>인스타 갤러리</h2>
        <InstaGallery
          images={[...Array(15)].map((_, i) => ({
            src: `https://picsum.photos/seed/b${i}/600/400?grayscale`,
          }))}
        />
      </section>
      {/* 연락처 */}
      <section className='my-16'>
        <h2 className='text-center'>마음 전하실 곳</h2>
        <div className='mt-8 mx-8'>
          <Accordion title='신랑측 계좌번호'>
            <div className='relative text-gy-6 text-xs'>
              <div className='flex items-center'>
                <div>카카오뱅크</div>
                <DividerIcon className='text-gy-8 mx-1' />
                <div>3333-23-999999</div>
              </div>
              <div>김경찬</div>
              <CopyButton className='absolute top-0.5 right-0' text='카카오뱅크 3333-23-999999' />
            </div>
          </Accordion>
          <Accordion title='신부측 계좌번호' className='mt-2'>
            <div className='relative text-gy-6 text-xs'>
              <div className='flex items-center'>
                <div>카카오뱅크</div>
                <DividerIcon className='text-gy-8 mx-1' />
                <div>3333-23-999999</div>
              </div>
              <div>김샛별</div>
              <CopyButton className='absolute top-0.5 right-0' text='카카오뱅크 3333-23-999999' />
            </div>
          </Accordion>
        </div>
      </section>
      <footer className='relative py-12'>
        <p className='px-6 mt-8 text-sm text-gy-6'>© 2023 bepyan. All rights reserved. </p>
      </footer>
    </main>
  );
}
