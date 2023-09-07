'use client';

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './cores/dialog';
import { ChatIcon, PhoneIcon } from './icons';

type Contact = {
  name: string;
  designation: string;
  phone: string;
};

export default function ContactDialog({
  groomList,
  priestList,
}: {
  groomList: Contact[];
  priestList: Contact[];
}) {
  return (
    <Dialog>
      <DialogTrigger className='border rounded-full px-4 py-2 transition-colors active:bg-gray-50 select-none'>
        연락하기
      </DialogTrigger>
      <DialogContent className='top-[50%] w-10/12 rounded-lg border'>
        <DialogTitle className='p-4 text-center'>연락처</DialogTitle>
        <div className='px-6 pb-4 text-sm space-y-4'>
          <div className='space-y-1'>
            {groomList.map((contact, i) => (
              <ContactItem key={i} contact={contact} />
            ))}
          </div>
          <div className='space-y-1'>
            {priestList.map((contact, i) => (
              <ContactItem key={i} contact={contact} />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ContactItem({ contact }: { contact: Contact }) {
  return (
    <div className='flex items-center justify-between gap-2'>
      <div className='flex-1'>{contact.designation}</div>
      <div className='flex-1'>{contact.name}</div>
      <div className='flex gap-3 text-gy-8'>
        <a href={`tel:${contact.phone}`} className='active:opacity-60 transition-opacity'>
          <PhoneIcon className='w-5 h-5' />
        </a>
        <a href={`sms:${contact.phone}`} className='active:opacity-60 transition-opacity'>
          <ChatIcon className='w-5 h-5' />
        </a>
      </div>
    </div>
  );
}
