'use client';

import { cn } from '~/libs/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './cores/accordion';
import { CopyLineIcon, DividerIcon } from './cores/icons';
import { copy } from '~/libs/copy';

export default function BankAccordion({
  title,
  bankList,
  className,
}: {
  title: string;
  bankList: { holder: string; bank: string; number: string }[];
  className?: string;
}) {
  return (
    <Accordion type='single' collapsible className={className}>
      <AccordionItem value='item-1'>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent className='space-y-2'>
          {bankList.map(({ holder, bank, number }, i) => (
            <div key={i} className='relative text-gy-6 text-xs'>
              <div className='flex items-center'>
                <div>{holder}</div>
                <DividerIcon className='text-gy-8 mx-1' />
                <div>{bank}</div>
                <DividerIcon className='text-gy-8 mx-1' />
                <div>{number}</div>
              </div>
              <button
                className={cn(
                  'absolute top-0.5 right-0',
                  'text-gy-6 transition-colors active:text-gy-8',
                )}
                onClick={() => copy(`${bank} ${number}`)}
              >
                <CopyLineIcon />
              </button>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
