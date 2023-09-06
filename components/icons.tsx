import { SVGProps } from 'react';
import { cn } from '~/libs/utils';

export function CloseLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 36 36' {...props}>
      <path
        fill='currentColor'
        d='m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z'
        className='clr-i-outline clr-i-outline-path-1'
      ></path>
      <path fill='none' d='M0 0h36v36H0z'></path>
    </svg>
  );
}

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m19 9l-7 6l-7-6'
      ></path>
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.438-1.787-.309-2.417.317Z'
      ></path>
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262ZM8 11.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5H8ZM7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9Z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}

export function DividerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20' {...props}>
      <path
        fill='currentColor'
        d='M9.5 3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5Z'
      ></path>
    </svg>
  );
}

export function CopyLineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <g fill='none' stroke='currentColor' strokeWidth='1.5'>
        <path d='M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-5Z'></path>
        <path
          d='M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3'
          opacity='.5'
        ></path>
      </g>
    </svg>
  );
}

export function PearlIcon(props: React.HTMLProps<HTMLImageElement>) {
  return (
    <img
      {...props}
      src='https://github.com/bepyan/charlan-byul/assets/65283190/2a6bfd15-e502-4d61-b94d-eec5758061a4'
      alt='진주'
      className={cn('w-3 h-3 aspect-square', props.className)}
    />
  );
}

export function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 16 16' {...props}>
      <path
        fill='currentColor'
        d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576L6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76l7.494-7.493Z'
      ></path>
    </svg>
  );
}

export function LoadingLoopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeDasharray='15'
        strokeDashoffset='15'
        strokeLinecap='round'
        strokeWidth='2'
        d='M12 3C16.9706 3 21 7.02944 21 12'
      >
        <animate fill='freeze' attributeName='stroke-dashoffset' dur='0.3s' values='15;0'></animate>
        <animateTransform
          attributeName='transform'
          dur='1.5s'
          repeatCount='indefinite'
          type='rotate'
          values='0 12 12;360 12 12'
        ></animateTransform>
      </path>
    </svg>
  );
}

export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <g fill='currentColor'>
        <path d='M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72l4.848-4.867Z'></path>
        <path d='M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837Z'></path>
      </g>
    </svg>
  );
}

export function DownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m19 9l-7 6l-7-6'
      ></path>
    </svg>
  );
}

export function VolumeOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M16.775 19.575q-.275.175-.55.325t-.575.275q-.375.175-.762 0t-.538-.575q-.15-.375.038-.738t.562-.537q.175-.075.325-.163t.3-.187L12 14.8v2.775q0 .675-.613.938T10.3 18.3L7 15H4q-.425 0-.713-.288T3 14v-4q0-.425.288-.713T4 9h2.2L2.1 4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l17 17q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2.325-2.325ZM19.6 16.8l-1.45-1.45q.425-.775.638-1.625t.212-1.75q0-2.075-1.1-3.787t-2.95-2.563q-.375-.175-.55-.537t-.05-.738q.15-.4.537-.575t.788 0Q18.1 4.85 19.55 7.05T21 11.975q0 1.325-.363 2.55T19.6 16.8Zm-3.35-3.35L14 11.2V8.85q0-.3.263-.437t.512.012Q15.6 8.95 16.05 10t.45 2q0 .375-.063.738t-.187.712ZM12 9.2L9.4 6.6l.9-.9q.475-.475 1.088-.213t.612.938V9.2Z'
      ></path>
    </svg>
  );
}

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 512 512'
      {...props}
    >
      <path
        d='M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 512 512'
      {...props}
    >
      <path
        d='M322.2 349.7c-3.1-3.1-3-8 0-11.3l66.4-74.4H104c-4.4 0-8-3.6-8-8s3.6-8 8-8h284.6l-66.3-74.4c-2.9-3.4-3.2-8.1-.1-11.2 3.1-3.1 8.5-3.3 11.4-.1 0 0 79.2 87 80 88s2.4 2.8 2.4 5.7-1.6 4.9-2.4 5.7-80 88-80 88c-1.5 1.5-3.6 2.3-5.7 2.3s-4.1-.8-5.7-2.3z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

export function MapPointIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' {...props}>
      <g fill='currentColor'>
        <path
          d='M3 8.71v8.128c0 1.043 0 1.565.283 1.958s.778.558 1.768.888l1.165.388c1.367.456 2.05.684 2.739.591L9 20.657v-14a3 3 0 0 1-.34.031c-.54.019-1.074-.16-2.141-.515c-1.398-.466-2.097-.699-2.629-.462a1.5 1.5 0 0 0-.497.358C3 6.5 3 7.236 3 8.71Zm18 6.58V7.163c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888l-1.165-.388c-1.367-.456-2.05-.684-2.739-.591L15 3.343v14c.113-.017.227-.027.34-.031c.54-.019 1.074.16 2.141.515c1.398.466 2.097.699 2.629.462a1.5 1.5 0 0 0 .497-.358C21 17.5 21 16.764 21 15.29Z'
          opacity='.5'
        ></path>
        <path d='M9.247 6.61A4.134 4.134 0 0 1 9 6.657v14c.67-.104 1.269-.503 2.442-1.285l1.382-.922c.936-.624 1.404-.936 1.93-1.06c.08-.02.163-.035.246-.047v-14c-.67.103-1.269.503-2.442 1.284l-1.382.922c-.936.624-1.404.936-1.93 1.06Zm8.234 11.217l.254.084l-.254-.084Z'></path>
      </g>
    </svg>
  );
}
